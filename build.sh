#!/bin/bash

./test_once.sh

if [ $? -ne 0 ]
then
    echo "Tests failed, skipping build"
    exit 1
fi

./node_modules/.bin/webpack -p
