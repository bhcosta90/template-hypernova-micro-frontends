#!/bin/bash

install_deps() {
    (cd hypernova-server-vue && yarn)
    (cd hypernova-server-react && yarn)
    (cd hypernova-aggregator && yarn)
    (cd hypernova-server-bootstrap && yarn)
}

install_deps