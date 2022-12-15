#!/bin/bash

install_deps() {
    (cd hypernova-server-vue && yarn)
    (cd hypernova-server-react && yarn)
    (cd hypernova-aggregator && yarn)
    (cd poc-product-view && yarn)
}

install_deps