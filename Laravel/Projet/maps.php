<?php $json = file_get_contents('http://maps.googleapis.com/maps/api/geocode/json?address=69140%20france');

$data = json_decode($json,true);

echo $data['results'][0]['geometry']['location']['lat'];


echo crypt('rasmuslerdorf', '$2a$07$usesomesillystringfor$');




echo crypt('rasmuslerdorf', '$2a$07$usesomesillystringfor$');