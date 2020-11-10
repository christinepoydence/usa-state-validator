'use strict';

const stateInformation = require('./data/usa_states.json');

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

const retrieveStateInformation = (textInput) => {
    if (typeof textInput === 'string' || textInput instanceof String){
        const stateObject = stateInformation.find(state => textInput.trim().toUpperCase() === state.name.toUpperCase() || textInput.trim().toUpperCase() === state.abbreviation.toUpperCase());
        if(stateObject){
            return stateObject;
        }
    }
    return {};
}

module.exports = {
    isValidStateAbbreviation,
    isValidStateName,
    isValidStateInput,
    retrieveStateInformation
};