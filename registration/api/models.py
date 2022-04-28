from django.db import models

class Participant(models.Model):
    person = models.CharField(max_length=128)
    project = models.CharField(max_length=128)
    city = models.CharField(max_length=64)

    class Meta:
        unique_together = ('person', 'project')
    def __str__(self):
        return self.person + self.project + self.city
    
    