'use strict';

const stateInformation = require('../data/usa_states.json');

const isValidStateAbbreviation = (stateAbbreviation) => {
    if (typeof stateAbbreviation === 'string' || stateAbbreviation instanceof String){
        const stateObject = stateInformation.find(state => stateAbbreviation.trim().toUpperCase() === state.abbreviation.toUpperCase());
        return !!stateObject;
    }
    return false;
    
};

const isValidStateName = (stateName) => {
    if (typeof stateName === 'string' || stateName instanceof String){
        const stateObject = stateInformation.find(state => stateName.trim().toUpperCase() === state.name.toUpperCase());
        return !!stateObject;
    }
    return false;
};

const isValidStateInput = (textInput) => {
    return isValidStateAbbreviation(textInput) || isValidStateName(textInput);
};

module.exports = {
    isValidStateAbbreviation,
    isValidStateName,
    isValidStateInput
};