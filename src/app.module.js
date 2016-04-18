var angular = require('angular');
var formly = require('angular-formly');
var formlyBootstrap = require('angular-formly-templates-bootstrap');
var formController = require('./form.controller');

var app = angular.module('app', [formly, formlyBootstrap])
  .controller('formController', formController);

module.exports = app.name;
