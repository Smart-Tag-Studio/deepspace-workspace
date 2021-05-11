#!/usr/bin/env node
'use strict';

var cosmiconfig = require('cosmiconfig');

const explorer = cosmiconfig.cosmiconfig('deepspace');
process.argv;

async function init() {
    const result = await explorer.search();

    console.log(result);
}

init();
