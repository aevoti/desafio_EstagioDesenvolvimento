# Project

The project idea is to use my web development knowledge to create a web application - The application consumes a weather API and display the data from the region of interesting.

 

## Technologies

- Python 3.+
- Django
- Requests Library
- Awesome Font
- Bootstrap 
- Mysql Lite

# How to use

First, make sure that you have Python 3.x + installed in your computer - if you don't have you can get it [Here](https://www.python.org/downloads/). 

After verified, clone this repository and use the follow command: 

```
    source venv/Scripts/activate
```
 

This command will access a virtual environment (venv) - Than run the pip install command to install all the project dependencys on the venv.

- Note: To leave venv, just use the command: deactivate

```
    pip install -r requirements.txt
```

Now you can run the project with the command 

```python
    python managy.py runserver
```

- Note 1: If you get Permission denied on windows, run the command using python3 instead of python.

- Note 2: If shows only "Watching for file changes with StatReloader" you can access the localhost (127.0.0.1:8000) and the project is alredy running.

## Features

- Search: The search is made by selecting a region of interesting, if the region doesn't exist the search will display a error msg. If the region exists, display the region informations like Temperature, description, wind speed, cloud cover, humidity, feels like and visibility.

- History: Each well done search is saved and used on Searchs route (127.0.0.1:8000/history), there contain the informations like when the search was done, temperature, location and description. 



Hope everything is good to go. :)
