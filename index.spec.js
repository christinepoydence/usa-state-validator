const {
    isValidStateAbbreviation,
    isValidStateName,
    isValidStateInput,
    retrieveStateInformation
} = require('./index');

describe('isValidStateAbbreviation, isValidStateInput, isValidStateName', () => {

    const stateData = [
        {
            input: {
                abbr: 'TX',
                name: 'Texas'
            },
            expectedResult: true
        },
        {
            input: {
                abbr: 'InvalidAbbr',
                name: 'InvalidState'
            },
            expectedResult: false
        },
        {
            input: {
                abbr: 123,
                name: 123
            },
            expectedResult: false
        },
        {
            input: {
                abbr: undefined,
                name: undefined
            },
            expectedResult: false
        },
        {
            input: {
                abbr: '  TX  ',
                name: '  Texas  '
            },
            expectedResult: true
        },
        {
            input: {
                abbr: 'tx',
                name: 'texas'
            },
            expectedResult: true
        }
    ];
  
    test.each(stateData)('isValidStateInput, isValidStateAbbreviation and isValidStateName successfully determine if the state abbreviation is valid',(data) =>{
        expect(isValidStateAbbreviation(data.input.abbr)).toEqual(data.expectedResult);
        expect(isValidStateName(data.input.name)).toEqual(data.expectedResult);
        expect(isValidStateInput(data.input.abbr)).toEqual(data.expectedResult);
        expect(isValidStateInput(data.input.name)).toEqual(data.expectedResult);
    });
});

describe('retrieveStateInformation', () => {

    const stateInformationData = [
        {
            input: "Ohio",
            expectedResult:  {
                abbreviation: "OH",
                name: "Ohio"
            }
        },
        {
            input: "ME",
            expectedResult:  {
                abbreviation: "ME",
                name: "Maine"
            }
        },
        {
            input: "turtle",
            expectedResult:  {}
        },
        {
            input: undefined,
            expectedResult:  {}
        }
    ]
    test.each(stateInformationData)('isValidStateInput, isValidStateAbbreviation and isValidStateName successfully determine if the state abbreviation is valid',(data) =>{
        expect(retrieveStateInformation(data.input)).toEqual(data.expectedResult);
    });
    
});