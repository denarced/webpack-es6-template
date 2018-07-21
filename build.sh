#!/bin/bash

./test.sh --once

if [ $? -ne 0 ]
then
    echo "Tests failed, skipping build"
    exit 1
fi

npx webpack -p
