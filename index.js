'use strict';

const stateInformation = require('./data/usa_states.json');


const isValidStateAbbreviation = (stateAbbreviation) => {
    return !!retrieveStateInformation(stateAbbreviation);
};

const isValidStateName = (stateName) => {
    return !!retrieveStateInformation(stateName)
};

const isValidStateInput = (textInput) => {
    return isValidStateAbbreviation(textInput) || isValidStateName(textInput);
};

const retrieveStateInformation = (textInput) => {
    if (typeof textInput === 'string' || textInput instanceof String){
        const stateObject = stateInformation.find(state => textInput.trim().toUpperCase() === state.name.toUpperCase() || textInput.trim().toUpperCase() === state.abbreviation.toUpperCase());
        if(stateObject){
            return stateObject;
        }
    }
    return null;
};

module.exports = {
    isValidStateAbbreviation,
    isValidStateName,
    isValidStateInput,
    retrieveStateInformation
};