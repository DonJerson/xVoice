# Generated by Django 3.0.3 on 2020-03-31 20:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kamailio', '0005_auto_20200331_1640'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apiusage',
            name='serviceProvided',
            field=models.CharField(blank=True, choices=[('GENVZ', 'GENVZ'), ('USCALL', 'US')], default=None, max_length=10, null=True),
        ),
    ]