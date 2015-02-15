(function () {
  "use strict";
  
  var app = angular.module("app", [
    "app.router",
    "app.controllers",
    "app.directives"
  ]);

  module.exports = {
    main: app
  };
})();