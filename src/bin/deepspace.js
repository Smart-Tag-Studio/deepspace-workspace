#!/usr/bin/env node
import { cosmiconfig } from 'cosmiconfig';

const explorer = cosmiconfig('deepspace');
const [, , ...args] = process.argv;

async function init() {
    const result = await explorer.search();

    console.log(result);
}

init();
