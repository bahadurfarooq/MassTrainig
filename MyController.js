/**
 * Created by  on 30-Mar-15.
 */
//var app = angular.module("myModule",[]);
//app.controller("myCntrol", function($scope){
//    $scope.name = "";
//});
var WorldCtrl = function ($scope) {
    $scope.population = 7000;
    $scope.countries = [
        {name: 'France', population: 63.1},
        {name: 'United Kingdom', population: 61.8},
    ];
};
