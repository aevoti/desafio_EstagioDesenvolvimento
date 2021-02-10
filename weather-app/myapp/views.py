from django.shortcuts import render
from django.core.paginator import Paginator
from django.db.models import Count
import requests
from .extras import weatherInfos
from .models import Search
from .forms import CityForm

#GLOBAL VARIABLES
params = {
        'access_key': 'eeb513546914bd969adf810889f895a9',
        'query': 'vitoria',
    }

# Create your views here.
def home(request):
    return render(request,'base.html')
    

def search(request):
    
    if request.method=="POST":
        # get the location of interesting.
        cityName = request.POST['City']
        # change the dictionary {access_key, param's}
        params['query'] = cityName

        # Search on API
        api_result = requests.get('http://api.weatherstack.com/current', params)
        api_response = api_result.json()
        
        # If the location doesn't exist show up a error page.
        if ('error' in api_response):
            msg = "Error, Place data not found."
            return render(request,'error.html', {'form': msg})
        
        weather = weatherInfos(api_response)
        # Saving the searchs
        search = Search()
        search.fillData(location=weather.name, temperature=weather.temperature, 
                        description=weather.description)
        search.save()

        return render(request,'weather.html',{'form': weather})
    
    return render(request,'base.html')


def search_history(request):
    #Take all search objects
    search_list = Search.objects.all()
    #Make a paginator object with 10 objs per page.
    paginator = Paginator(search_list,10)
    #take the current page
    page = request.GET.get('page')
    search = paginator.get_page(page)

    return render(request, 'history.html', {'searches': search  } )
