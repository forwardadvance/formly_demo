var assert = require('chai').assert;

var formController = require('../src/form.controller');

describe('formController', function() {
  var ctrl;

  beforeEach(function() {
    ctrl = new formController();
  })

  it('has an empty user', function() {
    assert.deepEqual(ctrl.user, {});
  });

  it('has userFields', function() {
    assert.isArray(ctrl.userFields);
  });
})
