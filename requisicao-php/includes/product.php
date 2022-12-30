<?php

function getProduct()
{
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => 'http://localhost:3032/batch',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => '{
    "content": {
      "name": "App",
      "data": {
        "title": "Products",
        "items": [
          {
            "title": "Product 1",
            "image": "https://via.placeholder.com/150"
          }
        ]
      }
    }
}',
    CURLOPT_HTTPHEADER => array(
      'Content-Type: application/json'
    ),
  ));

  $response = json_decode(curl_exec($curl), true);
  curl_close($curl);
  return $response;
}
