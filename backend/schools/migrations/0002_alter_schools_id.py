# Generated by Django 4.2 on 2024-08-08 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schools', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schools',
            name='id',
            field=models.CharField(editable=False, max_length=50, primary_key=True, serialize=False),
        ),
    ]
