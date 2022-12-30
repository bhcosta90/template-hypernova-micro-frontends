<?php
include_once './includes/product.php';
include_once './includes/header.php';
$product = getProduct();
$header = getHeader();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="http://localhost:8080/style.css">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
</head>

<body>
  <?php
  echo $header['results']['content']['html'];
  echo $product['results']['content']['html'];
  ?>
  <script src="http://localhost:3031/client.js"></script>
  <script src="http://localhost:3032/client.js"></script>
</body>

</html>