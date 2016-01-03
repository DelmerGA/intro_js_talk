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
      .when("/beginner", {
        templateUrl: "views/beginner.html",
        controller: "beginner"
      })
      .when("/dom_examples", {
        templateUrl: "views/dom_examples.html",
        controller: "beginner"
      })
      .when("/examples/:id", {
        templateUrl: "views/examples.html",
        controller: "examples",
        controllerAs: "examples as ex"
      });
  }

  Router.$inject = ["$routeProvider"];

  app.router.config(Router);

})();