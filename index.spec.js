const {
    isValidStateAbbreviation,
    isValidStateName,
    isValidStateInput,
    retrieveStateInformation
} = require('./index');

describe('isValidStateAbbreviation', () => {
    it('should return true when the input is a valid abbreviation for a state in the USA', () => {
        const result = isValidStateAbbreviation("TX");
        expect(result).toEqual(true);
    });
    it('should return false when the input is a valid abbreviation for a state in the USA', () => {
        const result = isValidStateAbbreviation("TY");
        expect(result).toEqual(false);
    });
    it('should return false if the input is not a string', () => {
        const result = isValidStateAbbreviation(123);
        expect(result).toEqual(false);
    });

    it('should return false if the input is undefined', () => {
        const result = isValidStateAbbreviation(undefined);
        expect(result).toEqual(false);
    });

    it('should return true if there is extra whitespace at the beginning and the end of the input value', () => {
        const result = isValidStateAbbreviation("  TX  ");
        expect(result).toEqual(true);
    });

    it('should return true if the state abbreviation is lowercase', () => {
        const result = isValidStateAbbreviation("tx");
        expect(result).toEqual(true);
    });
});

describe('isValidStateName', () => {
    it('should return true when the input is a valid name for a state in the USA', () => {
        const result = isValidStateName("Ohio");
        expect(result).toEqual(true);
    });
    it('should return false when the input is a valid name for a state in the USA', () => {
        const result = isValidStateName("Columbus");
        expect(result).toEqual(false);
    });
    it('should return false if the input is not a string', () => {
        const result = isValidStateName(123);
        expect(result).toEqual(false);
    });

    it('should return false if the input is undefined', () => {
        const result = isValidStateName(undefined);
        expect(result).toEqual(false);
    });
    it('should return true if there is extra whitespace at the beginning and the end of the input value', () => {
        const result = isValidStateName("  Alaska  ");
        expect(result).toEqual(true);
    });
    it('should return true if the state name is lowercase', () => {
        const result = isValidStateName("idaho");
        expect(result).toEqual(true);
    });
});

describe('isValidStateInput', () => {
    it('should return true when the input is a valid name for a state in the USA', () => {
        const result =  isValidStateInput("Ohio");
        expect(result).toEqual(true);
    });
    it('should return true when the input is a valid abbreviation for a state in the USA', () => {
        const result =  isValidStateInput("TX");
        expect(result).toEqual(true);
    });

    it('should return false when the input is not a valid abbreviation or name for a state in the USA', () => {
        const result =  isValidStateInput("turtle");
        expect(result).toEqual(false);
    });
    
});

describe('retrieveStateInformation', () => {
    it('should return the state information when the input is a valid name for a state in the USA', () => {
        const result =  retrieveStateInformation("Ohio");
        expect(result).toEqual(
            {
                abbreviation: "OH",
                name: "Ohio"
            });
    });
    it('should return  the state information when the input is a valid abbreviation for a state in the USA', () => {
        const result =  retrieveStateInformation("TX");
        expect(result).toEqual(
            {
                abbreviation: "TX",
                name: "Texas"
            }
        );
    });

    it('should return an empty object when the input is not a valid abbreviation or name for a state in the USA', () => {
        const result =  retrieveStateInformation("turtle");
        expect(result).toEqual({});
    });

    it('should return an empty object if the input is undefined', () => {
        const result = retrieveStateInformation(undefined);
        expect(result).toEqual({});
    });
    
});