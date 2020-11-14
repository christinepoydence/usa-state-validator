'use strict';

const stateInformation = require('./data/usa_states.json');

const retrieveStateInformationConditionally = (textInput, condition= null) => {
    if (typeof textInput === 'string' || textInput instanceof String){
        const formattedInput = textInput.trim().toUpperCase();
        let stateObject = null;
        if(condition){
            stateObject = stateInformation.find(state => formattedInput === state[condition].toUpperCase());
        }else{
            stateObject = stateInformation.find(state => formattedInput === state.name.toUpperCase() || formattedInput === state.abbreviation.toUpperCase() || formattedInput === state.capital.toUpperCase());
        }   
        if(stateObject){
            return stateObject;
        }
    }
    return null;
};

const isValidStateAbbreviation = (stateAbbreviation) => {
    return !!retrieveStateInformationConditionally(stateAbbreviation, 'abbreviation');
};

const isValidStateCapital= (stateCapital) => {
    return !!retrieveStateInformationConditionally(stateCapital, 'capital');
};

const isValidStateName = (stateName) => {
    return !!retrieveStateInformationConditionally(stateName, 'name');
};

const isValidStateInput = (textInput) => {
    return isValidStateAbbreviation(textInput) || isValidStateName(textInput);
};

const retrieveStateInformation = (textInput) => {
    return retrieveStateInformationConditionally(textInput);
};

module.exports = {
    isValidStateAbbreviation,
    isValidStateName,
    isValidStateInput,
    retrieveStateInformation,
    isValidStateCapital
};