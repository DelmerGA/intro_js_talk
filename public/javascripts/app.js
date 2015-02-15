(function () {
  "use strict";
  
  var app = angular.module("app", [
    "app.router",
    "app.controllers"
  ]);

  module.exports = {
    main: app
  };
})();