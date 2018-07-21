#!/bin/sh

if [ "$1" = "--help" ] || [ "$1" = "-h" ]
then
    echo "Usage: $0 [--once|-o]"
    echo "       --once|-o Run tests only once and exit"
    exit 1
fi

watch="--watch"
if [ "$1" = "--once" ] || [ "$1" = "-o" ]
then
    watch=""
fi

npx jest --coverage $watch
