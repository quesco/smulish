var assert = require('assert');
var assertChai = require('chai').assert,
  expectChai = require('chai').expect,
  foo = 'bar',
  beverages = {tea: ['chai', 'matcha', 'oolong']};

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });


    it('should be test using chai library', function () {
      assertChai.typeOf(foo, 'string'); // without optional message
      assertChai.typeOf(foo, 'string', 'foo is a string'); // with optional message
      assertChai.equal(foo, 'bar', 'foo equal `bar`');
      assertChai.lengthOf(foo, 3, 'foo`s value has a length of 3');
      assertChai.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
    });

    it('should be test using chai library like a BDD test through "expect" interface', function () {
      expectChai(foo).to.be.a('string');
      expectChai(foo).to.equal('bar');
      expectChai(foo).to.have.lengthOf(3);
      expectChai(beverages).to.have.property('tea').with.lengthOf(3);
    });
  });
});
