#!/bin/bash

watch=""
if [ "$1" == "-h" ] || [ "$1" == "--help" ]
then
    echo "Usage: $0 [options]"
    echo "Options:"
    echo "  -h, --help        Show this output"
    echo "  -w, --watch       Watch files for change"
    exit 1
elif [ "$1" == "-w" ] || [ "$1" == "--watch" ]
then
    watch="-w"
fi

nyc=./node_modules/.bin/nyc
mocha=./node_modules/.bin/mocha
crossenv=./node_modules/.bin/cross-env

$crossenv NODE_ENV=test \
    $nyc $mocha \
        --require babel-core/register \
        $watch
