[![npm version](https://badge.fury.io/js/usa-state-validator.svg)](https://badge.fury.io/js/usa-state-validator)
[![Known Vulnerabilities](https://snyk.io/test/github/christinepoydence/usa-state-validator/badge.svg?targetFile=package.json)](https://snyk.io/test/github/christinepoydence/usa-state-validator?targetFile=package.json)


# usa-state-validator

A tool to determine whether a given input is a valid name or abbreviation of a USA state.

## Install

```bash
npm install usa-state-validator
```

## Usage

```javascript
const usaStateValidator = require("usa-state-validator")

usaStateValidator.isValidStateInput('OH') // true
usaStateValidator.isValidStateInput('oh') // true
usaStateValidator.isValidStateInput('Ohio') // true
usaStateValidator.isValidStateInput('ohio') // true
usaStateValidator.isValidStateInput('  Ohio') // true
usaStateValidator.isValidStateInput('Oh io') // false
usaStateValidator.isValidStateInput('notAState') // false
usaStateValidator.isValidStateInput(undefined) // false
```