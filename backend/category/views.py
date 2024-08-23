# views.py
import pandas as pd
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from .models import Category
from .serializers import UploadFileSerializer, CategorySerializer
import openpyxl
from openpyxl.worksheet.datavalidation import DataValidation
from django.http import HttpResponse
from .models import Profile, Department, SubCategory
import os
from django.conf import settings
from accounts.models import MyUser
import math

class UploadFileView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UploadFileSerializer(data=request.data)
        if serializer.is_valid():
            file = serializer.validated_data['file']
            
            df = pd.read_excel(file)
            expected_headers = [ 'Name']
            actual_headers = df.columns.tolist()
            if actual_headers != expected_headers:
                return Response(
                    {
                        "error": "Invalid headers in the Excel file.",
                        "expected_headers": expected_headers,
                        "actual_headers": actual_headers,
                    },
                    status=400
                )
            billing_instances = []
            skipped_rows=[]
            for index, row in df.iterrows():
                try:
                    name = row.get('Name')
                    if Category.objects.filter(name=name).exists():
                        skipped_rows.append({
                            "index": index,
                            "reason": f"Department with name '{name}' already exists.",
                            "row_data": row.to_dict()
                        })
                        continue
                except Exception as e:
                    return Response(str(e))
           
            Category.objects.bulk_create(billing_instances)

            return Response({"message": "Successfully imported data from Excel",'skips':skipped_rows}, status=status.HTTP_201_CREATED, )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

def export_profiles_xlsx(request):
    
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = 'Profiles'

    # Write the header row
    headers = [
        'Name'
    ]
    ws.append(headers)


    # Define the file path
    file_path = os.path.join(settings.MEDIA_ROOT, 'profiles.xlsx')

    # Save the workbook to a file
    wb.save(file_path)

    return HttpResponse(f"Excel file has been saved to {file_path}")


class CategoryBulkCreate(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UploadFileSerializer(data=request.data)
        if serializer.is_valid():
            file = serializer.validated_data['file']
            df = pd.read_excel(file)
            expected_headers = ['Category','Sub-categor Name','Head Email']
            actual_headers = df.columns.tolist()
            if actual_headers != expected_headers:
                return Response(
                    {
                        "error": "Invalid headers in the Excel file.",
                        "expected_headers": expected_headers,
                        "actual_headers": actual_headers,
                    },
                    status=400
                )
            skipped_rows = []
            category_instances = []
            
            for index, row in df.iterrows():
                try:
                    name = row.get('Name')
                    head_email = row.get('Head Email',None)
                    category_name = row.get('Category')
                    if not name or math.isnan(name) or not category_name or math.isnan(category_name) or not head_email or math.isnan(head_email):
                        skipped_rows.append({ 
                            "index": index + 2,
                            "reason": "Category Name or Category is missing.",
                            "row_data": row.to_dict()
                        })
                        continue
                    if SubCategory.objects.filter(name=name).exists():
                        skipped_rows.append({
                            "index": index+2,
                            "reason": f"Category with name '{name}' already exists.",
                            "row_data": row.to_dict()
                        })
                        continue
                    head = None
                    if head_email:
                        try:
                            head= MyUser.objects.get(email=head_email)
                            profile= Profile.objects.get(user=head)
                            if profile.user_role not in ['Admin', 'Service Manager']:
                                skipped_rows.append({
                                    "index": index + 2,
                                    "reason": f"User with email {head_email} is neither an Admin nor a Service Manager.",
                                    "row_data": row.to_dict()
                                })
                                continue
                        except MyUser.DoesNotExist:
                            skipped_rows.append({
                                "index": index+2,
                                "reason": f"Manager with email {head_email} does not exist.",
                                "row_data": row.to_dict()

                            })
                            continue
                        except Profile.DoesNotExist:
                            skipped_rows.append({
                                "index": index + 2,
                                "reason": f"No profile found for user with email {head_email}.",
                                "row_data": row.to_dict()
                            })
                            continue
                    if category_name:
                        try:
                            category = Category.objects.get(name=category_name)
                        except Category.DoesNotExist:
                            category = Category.objects.create(name=category_name)
                            category.save()


                    subcategory = SubCategory(
                        name=name,
                        category=category,
                        head=head
                    )
                    category_instances.append(subcategory)
                except Exception as e:
                    error_message = str(e)
                    skipped_rows.append({
                        "index": index+2,
                        "reason": error_message,
                        "row_data": row.to_dict()
                    })
                    continue  
            SubCategory.objects.bulk_create(category_instances)

            return Response({"message": "Successfully imported category data from Excel", "skipped_rows": skipped_rows}, status=200)
        return Response(serializer.errors, status=400)


class DepartmentBulkCreate(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UploadFileSerializer(data=request.data)
        if serializer.is_valid():
            file = serializer.validated_data['file']
            df = pd.read_excel(file).fillna(value='')
            expected_headers = ['Name', 'Description', 'Manager Email']
            actual_headers = df.columns.tolist()
            if actual_headers != expected_headers:
                return Response(
                    {
                        "error": "Invalid headers in the Excel file.",
                        "expected_headers": expected_headers,
                        "actual_headers": actual_headers,
                    },
                    status=400
                )
            skipped_rows = []
            department_instances = []
            for index, row in df.iterrows():
                try:
                    name = row.get('Name')
                    description = row.get('Description', '')
                    manager_email = row.get('Manager Email', None)
                    if not name  or not manager_email  or not description :
                        skipped_rows.append({
                            "index": index + 2,
                            "reason": "values are missing.",
                            "row_data": row.to_dict()
                        })
                        continue
                    if Department.objects.filter(name=name).exists():
                        skipped_rows.append({
                            "index": index+2,
                            "reason": f"Department with name '{name}' already exists.",
                            "row_data": row.to_dict()
                        })
                        continue
                    manager = None
                    if manager_email:
                        try:
                            manager = MyUser.objects.get(email=manager_email)
                            profile= Profile.objects.get(user=manager)
                            if profile.user_role not in ['Admin', 'Service Manager']:
                                skipped_rows.append({
                                    "index": index + 2,
                                    "reason": f"User with email {manager_email} is neither an Admin nor a Service Manager.",
                                    "row_data": row.to_dict()
                                })
                                continue
                        except MyUser.DoesNotExist:
                            skipped_rows.append({
                                "index": index+2,
                                "reason": f"Manager with email {manager_email} does not exist.",
                                "row_data": row.to_dict()
                            })
                            continue
                        except Profile.DoesNotExist:
                            skipped_rows.append({
                                "index": index + 2,
                                "reason": f"No profile found for user with email {manager_email}.",
                                "row_data": row.to_dict()
                            })
                            continue
                    
                    department = Department(
                        name=name,
                        description=description,
                        manager=manager
                    )
                    department_instances.append( department)
                except Exception as e:
                    error_message = str(e)
                    skipped_rows.append({
                        "index": index+2,
                        "reason": error_message,
                        "row_data": row.to_dict()
                    })
                    continue  
            Department.objects.bulk_create(department_instances)

            return Response({"message": "Successfully imported department data from Excel", "skipped_rows": skipped_rows}, status=200)
        return Response(serializer.errors, status=400)