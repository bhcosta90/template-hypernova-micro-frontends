<!DOCTYPE html>
<html lang="en">

<?php

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
  CURLOPT_POSTFIELDS =>'{
    "content": {
        "name": "App",
        "data": {
            "name": "Bruno Costa",
            "brand": "My Brand",
            "price": "R$ 150,00",
            "finalPrice": "R$ 120,00",
            "eco": true,
            "cart": true,
            "wish": true,
            "discount": "-38%",
            "free_shipping": true,
            "sponsor": true,
            "black": true,
            "urlImage": "https://static.dafiti.com.br/p/Aura-Vestido-Aura-Faixa-Babado-Azul-9387-5557586-1-zoom.jpg"
        }
    }
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = json_decode(curl_exec($curl), true);

curl_close($curl);

?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="http://localhost:8998/dft.css">
</head>

<body>
    <?php
    echo $response['results']['content']['html'];
    ?>
    <script src="http://localhost:3032/client.js"></script>
</body>

</html>