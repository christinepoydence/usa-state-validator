[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
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
- return false if the input is not a state abbreviation or a state name

```javascript
const {isValidStateInput} = require("usa-state-validator")

isValidStateInput('OH') // true
isValidStateInput('oh') // true
isValidStateInput('Ohio') // true
isValidStateInput('ohio') // true
isValidStateInput('  Ohio') // true
isValidStateInput('Oh io') // false
isValidStateInput('notAState') // false
isValidStateInput(undefined) // false
```

### isValidStateName(textInput)

This method accepts an input value and returns true if the input is a valid USA state name. It will:
- return true regardless of case
- return false if the input is not a string
- return true if the input has leading or trailing spaces
- return false if the input is not a state abbreviation

```javascript
const {isValidStateName} = require("usa-state-validator")

isValidStateName('OHIO') // true
isValidStateName('ohio') // true
isValidStateName('Ohio') // true
isValidStateName('  Ohio') // true
isValidStateName('oh') // false
isValidStateName('OH') // false
isValidStateName('Oh io') // false
isValidStateName('notAState') // false
isValidStateName(undefined) // false
```

### isValidStateAbbreviation(textInput)

This method accepts an input value and returns true if the input is a valid USA state abbreviation. It will:
- return true regardless of case
- return false if the input is not a string
- return true if the input has leading or trailing spaces
- return false if the input is not a state name

```javascript
const {isValidStateAbbreviation} = require("usa-state-validator")

isValidStateAbbreviation('oh') // true
isValidStateAbbreviation('OH') // true
isValidStateAbbreviation(' OH ') // true
isValidStateAbbreviation('OHIO') // false
isValidStateAbbreviation('ohio') // false
isValidStateAbbreviation('Ohio') // false
isValidStateAbbreviation('  Ohio') // false
isValidStateAbbreviation('O H') // false
isValidStateAbbreviation('notAState') // false
isValidStateAbbreviation(undefined) // false
```

### retrieveStateInformation(textInput)

This method accepts an input value and returns the formatted state name and abbreviation as a JSON object if the input is a valid USA state abbreviation or name. It will:
- return the formatted object regardless of the case of the input
- return null if the input is not a string or if the input is not a valid state name or abbreviation
- return the formatted object if the input has leading or trailing spaces

```javascript
const {retrieveStateInformation} = require("usa-state-validator")

retrieveStateInformation('oh') //returns {abbreviation: "OH", name: "Ohio" }
retrieveStateInformation('OH') //returns {abbreviation: "OH", name: "Ohio" }
retrieveStateInformation(' OH ') //returns {abbreviation: "OH", name: "Ohio" }
retrieveStateInformation('OHIO') //returns {abbreviation: "OH", name: "Ohio" }
retrieveStateInformation('ohio') //returns {abbreviation: "OH", name: "Ohio" }
retrieveStateInformation('Ohio') //returns {abbreviation: "OH", name: "Ohio" }
retrieveStateInformation('  Ohio') //returns {abbreviation: "OH", name: "Ohio" }
retrieveStateInformation('O H') //returns null
retrieveStateInformation('notAState') //returns null
retrieveStateInformation(undefined) //returns null
```