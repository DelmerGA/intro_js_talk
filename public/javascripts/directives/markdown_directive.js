(function (markdown, $) {
  "use strict";

  this.directive("markdown", ["$http", function($http) {

      function MD() {
        this.restrict = "AEC";
      };

      MD.prototype.link = function (scope, element, attrs) {
        console.log("MD Running!", attrs)
        $http.get(attrs.src + ".md").
          success(function (data) {
            var $el = $("<div>").append(markdown(data));
            $el.find("table").addClass("table table-striped");
            console.log($el)
            element.append($el.html());
          }).
          error(function () {
            console.log("ERROR");
          })

      };

      return new MD();
  }]);

}).apply(require("./index.js"),[require("marked"), require("../../components/jquery/dist/jquery.js")])