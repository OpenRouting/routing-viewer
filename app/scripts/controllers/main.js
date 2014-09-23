'use strict';

/**
 * @ngdoc function
 * @name pgroutingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pgroutingApp
 */
angular.module('pgroutingApp')
  .controller('MainCtrl', ['$scope', 'leafletBoundsHelpers', 'routeModel',
        function ($scope, leafletBoundsHelpers, routeModel) {
    var init_bounds = leafletBoundsHelpers.createBoundsFromArray([
        [ 38.93037, -77.05333 ],
        [ 38.92850, -77.04855 ]]);

    $scope.defaults = {
        tileLayer: "http://api.tiles.mapbox.com/v4/bmoregeo.map-4rkgt9ta/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYm1vcmVnZW8iLCJhIjoiSk04dld2cyJ9.wMJSAMUtco68PrVuW2i4gA",
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

    $scope.doRoute = function(){
        console.log(routeModel.url);
    };

    console.log($scope.startpoint);

  }]);
