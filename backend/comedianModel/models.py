from django.conf import settings
from django.db import models


class Comedian(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=256,
    )


class Jokes(models.Model):
    "Generated Model"
    joke = models.CharField(
        max_length=256,
    )
    comedian = models.ForeignKey(
        "comedianModel.Comedian",
        on_delete=models.PROTECT,
        related_name="jokes_comedian",
    )


# Create your models here.
