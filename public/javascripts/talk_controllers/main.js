(function () {

  function Main($scope, $routeParams) {
    this.navUrl = 'views/partials/navbar.html';
  };

  Main.$inject = [
                  "$scope", 
                  "$routeParams"
                  ];

  this.controller("main", Main); 

}).apply(require("./index.js"));