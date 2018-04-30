const expect = require('expect');

var {isRealString} = require('./validation');


describe('isRealString', () => {
    it('should reject non-string values', () => {
        var name = 213;
        expect(isRealString(name)).not.toBe('string');

    });
    
    it('should reject strings with only spaces', () => {
        var name = '   ';
        expect(isRealString(name)).not.toBe('string');
    });
    
    it('should allow strings with non-space characters', () => {
        var name = ' Mohammad   ';        
        expect(isRealString(name)).toBe(true);
    });
})























