#!/bin/bash

vim `find src/ -type f` \
    `find test/ -type f` \
    webpack.config.js
