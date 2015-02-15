(function () {

  function Home ($scope, $routeParams) {
    $scope.greeting
  };

  Home.$inject = [
                  "$scope", 
                  "$routeParams"
                  ];

  this.controller("home", Home); 

}).apply(require("./index.js"));