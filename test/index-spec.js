const expect = require('chai').expect
const server = require('../routes/index');

describe('test', () => {
    it('should return a string', () => {
        expect('index JS template with travis').to.equal('index JS template with travis');
    });
});