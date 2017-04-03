(function () {
'use strict';
angular.module('MyApp', [])
.controller('Mymegcontroller', Mymegcontroller);
Mymegcontroller.$inject = ['$scope'];
function Mymegcontroller($scope)
{
  $scope.name="jithu";	
  $scope.stateof = "sad";
 /* $scope.makesmile=function()
  {
    $scope.stateof="smile";
	};*/
}
})();