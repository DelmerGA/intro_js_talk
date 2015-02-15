(function () {

  function Beginner ($scope, $routeParams) {
    $scope.getUrl = function() {
      return "notes/layouts_with_bootstrap/concepts_" + this.num +".html";
    }
  };

  Beginner.$inject = [
                  "$scope", 
                  "$routeParams"
                  ];

  this.controller("beginner", Beginner); 

}).apply(require("./index.js"));