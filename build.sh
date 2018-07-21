#!/bin/bash

# TODO Add --once parameter once changed to jest
./test.sh

if [ $? -ne 0 ]
then
    echo "Tests failed, skipping build"
    exit 1
fi

# TODO Use npx instead of .bin reference
./node_modules/.bin/webpack -p
