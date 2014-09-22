'use strict';

/**
 * @ngdoc function
 * @name pgroutingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pgroutingApp
 */
angular.module('pgroutingApp')
  .controller('MainCtrl', ['$scope', 'leafletBoundsHelpers', function ($scope, leafletBoundsHelpers) {
    var init_bounds = leafletBoundsHelpers.createBoundsFromArray([
        [ 38.93037, -77.05333 ],
        [ 38.92850, -77.04855 ]]);

    $scope.defaults = {
        //tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
        maxZoom: 16

    };

    $scope.bounds = init_bounds;
    $scope.center = {};

    $scope.title = 'National Zoological Navigator';

    $scope.pois = [
        'test1',
        'test2',
        'test3'
    ];
    $scope.startpoint = undefined;

    console.log($scope.startpoint);

  }]);
