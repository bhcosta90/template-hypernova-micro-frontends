const express = require('express')
const path = require('path')
const { getContent } = require('./services/content')
const { getLayout } = require('./services/layout')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
  const promises = [getContent(), getLayout()];
  const [{ content }, { header }] = await Promise.all(promises);
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
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
    </head>
    <body>
      ${header.html}
      ${content.html}
      <script src="http://localhost:3031/client.js"></script>
      <script src="http://localhost:3032/client.js"></script>
    </body>
    </html>
  `;

  return res.send(html)
})

app.listen(process.env.PORT || 8080, () => console.log('Aggregator Running'))
