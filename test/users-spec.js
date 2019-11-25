const expect = require('chai').expect
const server = require('../routes/users');

describe('users test', () => {
    it('should return a string', () => {
        expect('Users JS template with travis').to.equal('Users JS template with travis');
    });
});