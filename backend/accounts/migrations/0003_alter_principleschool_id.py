# Generated by Django 4.2 on 2024-08-08 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_myuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='principleschool',
            name='id',
            field=models.CharField(editable=False, max_length=50, primary_key=True, serialize=False),
        ),
    ]
