#!/bin/bash

while :
do
    clear
    echo -n "Run tests @ "
    date -Iseconds
    ./test_once.sh

    inotifywait --quiet `find src/ test/ -type f -name \*.js`
done
