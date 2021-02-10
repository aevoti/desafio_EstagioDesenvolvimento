
class Weather():
    def __init__(self, name, temperature, icon, description ,wind_speed, humidity, cloud_cover, feelslike, visibility):
        self.name = name
        self.temperature = temperature
        self.icon = icon
        self.description = description
        self.wind_speed = wind_speed
        self.humidity = humidity
        self.cloud_cover = cloud_cover
        self.feelslike = feelslike
        self.visibility = visibility

    def printInfos(self):
        print(f'Place: {self.name}')
        print(f'Temperature: {self.temperature}')
        print(f'description: {self.description}')
        print(f'Wind speed: {self.wind_speed}')
        print(f'Humidity: {self.humidity}')
        print(f'Cloud Cover: {self.cloud_cover}')
        print(f'Feelslike: {self.feelslike}')
        print(f'Visibility: {self.visibility}')


# Cria um objeto<weather> com as informações do local a partir de um JSON. 
# JSON -> Weather()
def weatherInfos(response):
    #gather info
    name = response['request']['query']
    temperature = response['current']['temperature']
    icon = response['current']['weather_icons'][0]
    description =  response['current']['weather_descriptions'][0]
    wind_speed = response['current']['wind_speed']
    humidity = response['current']['humidity']
    cloud_cover = response['current']['cloudcover']
    feelslike = response['current']['feelslike']
    visibility = response['current']['visibility']
    
    #creating object
    weatherInfo = Weather(name, temperature, icon, description ,wind_speed, humidity, cloud_cover, feelslike, visibility)
    
    return weatherInfo
