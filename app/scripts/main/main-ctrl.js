'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function ($scope, $famous) {
    //var Transitionable = $famous['famous/transitions/Transitionable'];
    //var Timer = $famous['famous/utilities/Timer'];
    //
    ////var Engine = require("famous/core/Engine");
    ////var Surface = require("famous/core/Surface");
    ////var GridLayout = require("famous/views/GridLayout");
    //
    //var mainContext = Engine.createContext();
    //
    //var grid = new GridLayout({
    //  dimensions: [4, 2]
    //});
    //
    //var surfaces = [];
    //
    //grid.sequenceFrom(surfaces);
    //
    //for(var i = 0; i < 8; i++) {
    //  surfaces.push(new Surface({
    //    content: "panel " + (i + 1),
    //    size: [undefined, undefined],
    //    properties: {
    //      backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)",
    //      color: "#404040",
    //      lineHeight: '200px',
    //      textAlign: 'center'
    //    }
    //  }));
    //}
    //
    //mainContext.add(grid);

    var Engine = $famous['famous/core/Engine'];
    var EventHandler = $famous['famous/core/EventHandler'];

    $scope.enginePipe = new EventHandler();
    Engine.pipe($scope.enginePipe);

    $scope.gridElements = [
      {backgroundColor: '#F00', index: 1, imageUrl: 'http://lorempixel.com/output/cats-q-c-640-480-8.jpg'},
      {backgroundColor: '#FF0', index: 2, imageUrl: 'http://lorempixel.com/output/cats-q-c-640-480-8.jpg'},
      {backgroundColor: '#0F0', index: 3, imageUrl: 'http://lorempixel.com/output/cats-q-c-640-480-8.jpg'},
      {backgroundColor: '#0FF', index: 4, imageUrl: 'http://lorempixel.com/output/cats-q-c-640-480-8.jpg'},
      {backgroundColor: '#00F', index: 5, imageUrl: 'http://lorempixel.com/output/cats-q-c-640-480-8.jpg'},
      {backgroundColor: '#F0F', index: 6, imageUrl: 'http://lorempixel.com/output/cats-q-c-640-480-8.jpg'},
      {backgroundColor: '#F00', index: 7, imageUrl: 'http://lorempixel.com/output/cats-q-c-640-480-8.jpg'},
      {backgroundColor: '#FF0', index: 8, imageUrl: 'http://lorempixel.com/output/cats-q-c-640-480-8.jpg'},
      {backgroundColor: '#0F0', index: 9, imageUrl: 'http://lorempixel.com/output/cats-q-c-640-480-8.jpg'},
      {backgroundColor: '#0FF', index: 10, imageUrl: 'http://lorempixel.com/output/cats-q-c-640-480-8.jpg'},
      {backgroundColor: '#00F', index: 11, imageUrl: 'http://lorempixel.com/output/cats-q-c-640-480-8.jpg'},
      {backgroundColor: '#F0F', index: 12, imageUrl: 'http://lorempixel.com/output/cats-q-c-640-480-8.jpg'}
    ];

    //$scope.enginePipe.on('click', function(){
    //  $scope.changeDimensions();
    //  $scope.gridElements.splice(0, 1);
    //
    //  if(!$scope.$$phase) $scope.$apply();
    //})

    $scope.gridLayoutOptions = {
      dimensions: [3, 3]
    }

    $scope.changeDimensions = function(){
      console.log('changing dimensions')
      $scope.gridLayoutOptions.dimensions[0]++;
    }


  });
