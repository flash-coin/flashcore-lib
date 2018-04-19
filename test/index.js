'use strict';

var should = require('chai').should();
var flashcore = require('../');

describe('#versionGuard', function() {
  it('global._flashcore should be defined', function() {
    should.equal(global._flashcore, flashcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      flashcore.versionGuard('version');
    }).should.throw('More than one instance of flashcore');
  });
});
