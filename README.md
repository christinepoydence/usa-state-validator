[![npm version](https://badge.fury.io/js/usa-state-validator.svg)](https://badge.fury.io/js/usa-state-validator)
[![Known Vulnerabilities](https://snyk.io/test/github/christinepoydence/usa-state-validator/badge.svg?targetFile=package.json)](https://snyk.io/test/github/christinepoydence/usa-state-validator?targetFile=package.json)
[![Build Status](https://travis-ci.com/christinepoydence/usa-state-validator.svg?branch=main)](https://travis-ci.com/christinepoydence/usa-state-validator)
[![Coverage Status](https://coveralls.io/repos/github/christinepoydence/usa-state-validator/badge.svg?branch=main)](https://coveralls.io/github/christinepoydence/usa-state-validator?branch=main)

# usa-state-validator

A tool to determine whether a given input is a valid name or abbreviation of a USA state.

## Install

```bash
npm install usa-state-validator
```

## Usage

### isValidStateInput(textInput)

This method accepts an input value and returns true if the input is a valid USA state name or abbreviation. It will:
- return true regardless of case
- return false if the input is not a string
- return true if the input has leading or trailing spaces

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

### isValidStateName(textInput)

This method accepts an input value and returns true if the input is a valid USA state name. It will:
- return true regardless of case
- return false if the input is not a string
- return true if the input has leading or trailing spaces
- return false if the input is a state abbreviation

```javascript
const usaStateValidator = require("usa-state-validator")

usaStateValidator.isValidStateName('OHIO') // true
usaStateValidator.isValidStateName('ohio') // true
usaStateValidator.isValidStateName('Ohio') // true
usaStateValidator.isValidStateName('  Ohio') // true
usaStateValidator.isValidStateName('oh') // false
usaStateValidator.isValidStateName('OH') // false
usaStateValidator.isValidStateName('Oh io') // false
usaStateValidator.isValidStateName('notAState') // false
usaStateValidator.isValidStateName(undefined) // false
```

### isValidStateAbbreviation(textInput)

This method accepts an input value and returns true if the input is a valid USA state abbreviation. It will:
- return true regardless of case
- return false if the input is not a string
- return true if the input has leading or trailing spaces
- return false if the input is a state name

```javascript
const usaStateValidator = require("usa-state-validator")

usaStateValidator.isValidStateAbbreviation('oh') // true
usaStateValidator.isValidStateAbbreviation('OH') // true
usaStateValidator.isValidStateAbbreviation(' OH ') // true
usaStateValidator.isValidStateAbbreviation('OHIO') // false
usaStateValidator.isValidStateAbbreviation('ohio') // false
usaStateValidator.isValidStateAbbreviation('Ohio') // false
usaStateValidator.isValidStateAbbreviation('  Ohio') // false
usaStateValidator.isValidStateAbbreviation('O H') // false
usaStateValidator.isValidStateAbbreviation('notAState') // false
usaStateValidator.isValidStateAbbreviation(undefined) // false
```

### retrieveStateInformation(textInput)

This method accepts an input value and returns the formatted state name and abbreviation as a JSON object if the input is a valid USA state abbreviation or name. It will:
- return the formatted object regardless of the case of the input
- return an empty object if the input is not a string
- return the formatted object if the input has leading or trailing spaces

```javascript
const usaStateValidator = require("usa-state-validator")

usaStateValidator.retrieveStateInformation('oh') //returns {abbreviation: "OH", name: "Ohio" }
usaStateValidator.retrieveStateInformation('OH') //returns {abbreviation: "OH", name: "Ohio" }
usaStateValidator.retrieveStateInformation(' OH ') //returns {abbreviation: "OH", name: "Ohio" }
usaStateValidator.retrieveStateInformation('OHIO') //returns {abbreviation: "OH", name: "Ohio" }
usaStateValidator.retrieveStateInformation('ohio') //returns {abbreviation: "OH", name: "Ohio" }
usaStateValidator.retrieveStateInformation('Ohio') //returns {abbreviation: "OH", name: "Ohio" }
usaStateValidator.retrieveStateInformation('  Ohio') //returns {abbreviation: "OH", name: "Ohio" }
usaStateValidator.retrieveStateInformation('O H') //returns {}
usaStateValidator.retrieveStateInformation('notAState') //returns {}
usaStateValidator.retrieveStateInformation(undefined) //returns {}
```