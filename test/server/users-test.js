'use strict';

require('../setup');

// code to test
var server = require('../../lib/server');

// libraries
var request = require('supertest-as-promised').agent,
    User = require('../../models').User;

describe('/users', function() {
  var agent;

  beforeEach(function() {
    agent = request(server);
  });

  after(function() {
    return User.truncate();
  });

  it('should have a /register page', function() {
    return agent
      .get('/users/register')
      .expect(200);
  });

  it('should have a /login page', function() {
    return agent
      .get('/users/login')
      .expect(200);
  });
});
