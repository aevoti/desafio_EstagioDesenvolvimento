CREATE DATABASE weather_stack
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE weather_stack;

CREATE TABLE weather_search(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	register_local_date DATETIME DEFAULT CURRENT_TIMESTAMP,

	request_type VARCHAR(32) NOT NULL,
    	request_query VARCHAR(50) NOT NULL,
    	request_language VARCHAR(2) NOT NULL,
    	request_unit VARCHAR(2) NOT NULL,

	location_name VARCHAR(50) NOT NULL,
    	location_country VARCHAR(50) NOT NULL,
    	location_region VARCHAR(50) NOT NULL,
    	location_lat VARCHAR(50) NOT NULL,
    	location_lon VARCHAR(50) NOT NULL,
    	location_timezone_id VARCHAR(50) NOT NULL,
    	location_localtime VARCHAR(50) NOT NULL,
    	location_localtime_epoch INT NOT NULL,
    	location_utc_offset VARCHAR(5) NOT NULL,

	current_observation_time VARCHAR(10) NOT NULL,
    	current_temperature INT NOT NULL,
    	current_weather_code INT NOT NULL,
    	current_weather_icons VARCHAR(1000) NOT NULL,
    	current_weather_descriptions VARCHAR(1000) NOT NULL,
    	current_wind_speed INT NOT NULL,
    	current_wind_degree INT NOT NULL,
    	current_wind_dir VARCHAR(4) NOT NULL,
    	current_pressure INT NOT NULL,
    	current_precip INT NOT NULL,
    	current_humidity INT NOT NULL,
    	current_cloudcover INT NOT NULL,
    	current_feelslike INT NOT NULL,
    	current_uv_index INT NOT NULL,
    	current_visibility INT NOT NULL,
    	current_is_day VARCHAR(4) NOT NULL


) DEFAULT CHARSET = utf8;