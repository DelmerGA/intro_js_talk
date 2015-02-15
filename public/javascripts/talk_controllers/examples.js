(function () {
  function Examples($scope, $routeParams) {};

  Examples.$inject = [
                                  "$scope", 
                                  "$routeParams"
                                  ];

  this.controller("examples", Examples); 

}).apply(require("./index.js"));