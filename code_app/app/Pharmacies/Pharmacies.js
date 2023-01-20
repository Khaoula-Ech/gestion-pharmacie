
const Firebase = require("firebase");
angular.module('myApp.Pharmacies', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Pharmacies', {
    templateUrl: 'Pharmacies/Pharmacies.html',
    controller: 'PharmaciesCtrl'
  });
}])

.controller('PharmaciesCtrl', ['$scope','$firebaseArray',function($scope,$firebaseArray) {
var ref= new Firebase('https://console.firebase.google.com/u/0/project/monprojet-cf9da/database/monprojet-cf9da-default-rtdb/data/~2F');
$scope.medicaments=$firebaseArray(ref);
$scope.addMedicament=function()
{
  console.log('Adding Medicament');
}

}]);
