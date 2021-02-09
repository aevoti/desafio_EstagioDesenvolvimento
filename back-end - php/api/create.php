<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $req = json_decode($postdata);

  echo "console.log($output);";

/*
  // Create.
  $sql = "INSERT INTO weather_search (request_type, request_query, request_language, request_unit, location_name, location_country, location_region, location_lat, location_lon, location_timezone_id, location_localtime, location_localtime_epoch, location_utc_offset, current_observation_time, current_temperature, current_weather_code, current_weather_icons, current_weather_descriptions, current_wind_speed, current_wind_degree, current_wind_dir, current_pressure, current_precip, current_humidity, current_cloudcover, current_feelslike, current_uv_index, current_visibility, current_is_day) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
  $sql = "INSERT INTO `policies`(`id`,`number`,`amount`) VALUES (null,'{$number}','{$amount}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $policy = [
      'number' => $number,
      'amount' => $amount,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($policy);
  }
  else
  {
    http_response_code(422);
  }
}





function createRouter(db) {
    const router = express.Router();
    const owner = '';
  
    router.post('/info-weather', (req, res) => {
      db.query(
        'INSERT INTO weather_search (request_type, request_query, request_language, request_unit, location_name, location_country, location_region, location_lat, location_lon, location_timezone_id, location_localtime, location_localtime_epoch, location_utc_offset, current_observation_time, current_temperature, current_weather_code, current_weather_icons, current_weather_descriptions, current_wind_speed, current_wind_degree, current_wind_dir, current_pressure, current_precip, current_humidity, current_cloudcover, current_feelslike, current_uv_index, current_visibility, current_is_day) VALUES'
        + '('
        [
          $req->request->type,
          $req->body.request.query,
          $req.body.request.language,
          $req.body.request.unit,
  
          $req.body.location.name,
          $req.body.location.country,
          req.body.location.region,
          req.body.location.lat,
          req.body.location.lon,
          req.body.location.timezone_id,
          req.body.location.localtime,
          req.body.location.localtime_epoch,
          req.body.location.utc_offset,
  
          req.body.current.observation_time,
          req.body.current.temperature,
          req.body.current.weather_code,
          req.body.current.weather_icons,
          req.body.current.weather_descriptions,
          req.body.current.wind_speed,
          req.body.current.wind_degree,
          req.body.current.wind_dir,
          req.body.current.pressure,
          req.body.current.precip,
          req.body.current.humidity,
          req.body.current.cloudcover,
          req.body.current.feelslike,
          req.body.current.uv_index,
          req.body.current.visibility,
          req.body.current.is_day
        ],
        
        (error) => {
          if (error) {
            console.error(error);
            res.status(500).json({status: 'error'});
          } else {
            res.status(200).json({status: 'ok'});
          }
        }
  
      );
    });




*/




?>