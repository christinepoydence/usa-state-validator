const {
    isValidStateAbbreviation,
    isValidStateName,
    isValidStateInput,
    retrieveStateInformation,
    isValidStateCapital
} = require('./index');

describe('isValidStateAbbreviation, isValidStateInput, isValidStateName', () => {

    const stateData = [
        {
            input: {
                abbr: 'TX',
                name: 'Texas',
                capital: 'Austin'
            },
            expectedResult: true
        },
        {
            input: {
                abbr: 'InvalidAbbr',
                name: 'InvalidState',
                capital: 'InvalidCapital'
            },
            expectedResult: false
        },
        {
            input: {
                abbr: 123,
                name: 123,
                capital: 123
            },
            expectedResult: false
        },
        {
            input: {
                abbr: undefined,
                name: undefined,
                capital: undefined
            },
            expectedResult: false
        },
        {
            input: {
                abbr: '  TX  ',
                name: '  Texas  ',
                capital: ' Austin '
            },
            expectedResult: true
        },
        {
            input: {
                abbr: 'tx',
                name: 'texas',
                capital: 'austin'
            },
            expectedResult: true
        }
    ];
  
    test.each(stateData)('isValidStateInput, isValidStateAbbreviation and isValidStateName successfully determine if the state abbreviation is valid',(data) =>{
        expect(isValidStateAbbreviation(data.input.abbr)).toEqual(data.expectedResult);
        expect(isValidStateName(data.input.name)).toEqual(data.expectedResult);
        expect(isValidStateInput(data.input.abbr)).toEqual(data.expectedResult);
        expect(isValidStateInput(data.input.name)).toEqual(data.expectedResult);
        expect(isValidStateCapital(data.input.capital)).toEqual(data.expectedResult);
    });
});

describe('retrieveStateInformation', () => {

    const stateInformationData = [
        {
            input: "Ohio",
            expectedResult:  {
                abbreviation: "OH",
                name: "Ohio",
                capital: "Columbus"
            }
        },
        {
            input: "ME",
            expectedResult:  {
                abbreviation: "ME",
                name: "Maine",
                capital: "Augusta"
            }
        },
        {
            input: "turtle",
            expectedResult:  null
        },
        {
            input: undefined,
            expectedResult:  null
        }
    ]
    test.each(stateInformationData)('isValidStateInput, isValidStateAbbreviation and isValidStateName successfully determine if the state abbreviation is valid',(data) =>{
        expect(retrieveStateInformation(data.input)).toEqual(data.expectedResult);
    });
    
});