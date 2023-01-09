from django.db import models
from django.utils import timezone

class Participant(models.Model):
    firstName = models.CharField(max_length=128)
    lastName = models.CharField(max_length=128)
    project = models.CharField(max_length=128)
    clubNumber = models.IntegerField()
    city = models.CharField(max_length=64)
    registered_at = models.DateTimeField(default=timezone.now)

    class Meta:
        #unique_together = ('firstName', 'lastName','project')
        pass
    def __str__(self):
        return self.firstName +" "+self.lastName+" "+ str(self.clubNumber) +" "+ self.city
    
    
