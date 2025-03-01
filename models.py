from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=200)
    content=models.CharField(max_length=1000)
    location=models.CharField(max_length=100)
    isActive=models.BooleanField()
    distance=models.IntegerField()
    image = models.URLField()