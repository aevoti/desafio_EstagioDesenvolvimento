from django.db import models
from datetime import date , datetime

# Create your models here.    
class Search(models.Model):
    search_id = models.AutoField(primary_key=True)
    location = models.CharField(max_length= 100)
    date = models.DateField(blank=True, null=True)
    search_time = models.TimeField()
    temperature = models.IntegerField()
    description = models.CharField(max_length=100)
    
    def __str__(self):
        return self.location

    def fillData(self,location, temperature, description):
        self.location = location
        # Currrent day.
        dateTime = datetime.now()
        current_day = dateTime.strftime("%Y-%m-%d")
        self.date = current_day
        # Current time
        current_time = dateTime.strftime("%H:%M:%S")
        self.search_time = current_time
        self.temperature = temperature
        self.description = description

    def showData(self):
        print(f"Id: {self.search_id}")
        print(f'Place: {self.location}')
        print(f"Data: {self.date}  Time: {self.search_time}")
        print(f'Temperature: {self.temperature}')
        print(f'description: {self.description}')