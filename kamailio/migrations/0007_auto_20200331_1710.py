# Generated by Django 3.0.3 on 2020-03-31 21:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('kamailio', '0006_auto_20200331_1642'),
    ]

    operations = [
        migrations.RenameField(
            model_name='apiusage',
            old_name='endTime',
            new_name='endDate',
        ),
        migrations.RenameField(
            model_name='apiusage',
            old_name='startTime',
            new_name='startDate',
        ),
    ]