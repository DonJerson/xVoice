# Generated by Django 3.0.3 on 2020-03-31 21:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('kamailio', '0007_auto_20200331_1710'),
    ]

    operations = [
        migrations.RenameField(
            model_name='apiusage',
            old_name='endDate',
            new_name='endTime',
        ),
        migrations.RenameField(
            model_name='apiusage',
            old_name='startDate',
            new_name='startTime',
        ),
    ]
