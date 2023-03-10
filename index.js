'use strict'

require('dotenv').config({ silent: true });
require('./core');


const config = require("./config");
const semver = require('semver'); 
const pkg    = require('./package.json');


// validate Node version requirement
const runtime = {
    expected: semver.validRange(pkg.engines.node), actual: semver.valid(process.version)
}

const valid = semver.satisfies(runtime.actual, runtime.expected);

if (!valid) {
    throw new Error(
        `Expected Node.js version ${runtime.expected}, but found v${runtime.actual}. Please update or change your runtime!`
    );
}

