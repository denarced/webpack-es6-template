#!/bin/bash

nyc=./node_modules/.bin/nyc
mocha=./node_modules/.bin/mocha
crossenv=./node_modules/.bin/cross-env

$crossenv NODE_ENV=test \
    $nyc $mocha --require babel-core/register
