var userFields = require('./form.user.fields');

module.exports = function() {
  var vm = this;
  vm.user = {};
  vm.userFields = userFields;
};
