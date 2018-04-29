var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate message object', () => {
        var from = 'Abbas';
        var text = 'whadup';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from,
            text
        });
    });
});

describe('generateMessage', () => {
    it('should generate correct location', () => {
       var from = 'Abbas';
       var latitude = 1;
       var longitude = 1;
       var location = generateLocationMessage(from, latitude, longitude);
        
        expect(typeof location.createdAt).toBe('number');
        expect(location).toMatchObject({
            from,
            url: `https://www.google.com/maps?q=${latitude},${longitude}`
        });
    })
});
