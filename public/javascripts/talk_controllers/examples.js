(function () {
  function Examples($scope, $routeParams) {
    this.id = $routeParams.id;
    $scope.route = "notes/"+ this.id;
  };

  Examples.$inject = [
                                  "$scope", 
                                  "$routeParams"
                                  ];

  this.controller("examples", Examples); 

}).apply(require("./index.js"));