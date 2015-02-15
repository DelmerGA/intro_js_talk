(function () {
  "use strict";
  var app;

  app = require("./app.js");
  
  app.router = angular.module("app.router", [
    "ngRoute"
  ]);

  function Router ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
        controller: "home"
      })
      .when("/examples/:id", {
        templateUrl: "views/examples.html",
        controller: "examples"
      });
  }
  
  Router.$inject = ["$routeProvider"];

  app.router.config(Router);

})();