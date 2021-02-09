<?php

require 'database.php';

$policies = [];
$sql = "SELECT id, register_local_date, request_type, request_query, request_language, request_unit, location_name, location_country, location_region, location_lat, location_lon, location_timezone_id, location_localtime, location_localtime_epoch, location_utc_offset, current_observation_time, current_temperature, current_weather_code, current_weather_icons, current_weather_descriptions, current_wind_speed, current_wind_degree, current_wind_dir, current_pressure, current_precip, current_humidity, current_cloudcover, current_feelslike, current_uv_index, current_visibility, current_is_day FROM weather_search ORDER BY id DESC";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $policies[$i]= $row;
    $i++;
  }

  echo json_encode($policies);
}
else
{
  http_response_code(404);
}


?>
