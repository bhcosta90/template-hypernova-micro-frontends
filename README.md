# Hypernova Micro-Frontends
Font: https://github.com/marconi1992/hypernova-micro-frontends

## Quickstart

```sh
sh setup.sh
cd hypernova-aggregator
yarn buildAll
yarn startAll
```

This will start the following processes:
- hypernova-server-vue on port `3030`
- hypernova-server-react on port `3031`
- hypernova-server-bootstrap on port `3032`
- hypernova-aggregator on port `8080`

To visualize in php, you need to start a service `hypernova-server-bootstrap`
```sh
cd hypernova-aggregator
yarn buildAll
yarn startAll
```

In other terminal you need to execute this command
```sh
php -S localhost:8000 -t requisicao-php
```

Navigate to http://localhost:8080 to see the micro-frontends running through Hypernova
