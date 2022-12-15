const express = require('express')
const path = require('path')
const { getContent } = require('./services/content')
const { getLayout } = require('./services/layout')
const { getProductView } = require("./services/product-view");

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
  const promises = [getContent(), getLayout(), getProductView()];
  const [content, { header }, productView] = await Promise.all(promises);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <link rel="stylesheet" href="/style.css">
      <link rel="stylesheet" href="http://localhost:8998/dft.css">
    </head>
    <body>
      ${header.html}
      ${content.html}
      <div class='k-product-list'>${productView.html}</div>
      <script src="http://localhost:3032/client.js"></script>
      <script src="http://localhost:3031/client.js"></script>
      <script src="http://localhost:3030/client.js"></script>
    </body>
    </html>
  `;

  return res.send(html)
})

app.listen(process.env.PORT || 8080, () => console.log('Aggregator Running'))
