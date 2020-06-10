(function () {
  'use strict'

  angular.module('LunchCheck',[])

  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope) {
    $scope.item="";

    $scope.displayResult=function () {
      var result=validate($scope.item);
      $scope.display=result;
    };

    function validate(string) {
      var items=string.split(",");
      var newItems=[];
      for (var i = 0; i < items.length; i++) {
        var newItem=items[i].replace(/ /g,'');
        console.log(newItem);
        if (newItem=="") {
          continue;
        }
        newItems.push(newItem);
      }
      if (newItems.length==0) {
        return "Please enter data first";
      }
      console.log(newItems);
      return checkIfTooMuch(newItems.length);
    }

    function checkIfTooMuch(value) {
      if (value<=3) {
        return "Enjoy!";
      }
      return "Too much!"
    };
  };

})()
