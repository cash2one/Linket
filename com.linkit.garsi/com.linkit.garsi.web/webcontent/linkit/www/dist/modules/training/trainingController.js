/*! ross */
"use strict";angular.module("TrainingControllers",["TrainingServices"]).controller("TrainingListController",["$scope","TrainingListService",function(a,b){a.shouldShowDelete=!1,a.shouldShowReorder=!1,a.listCanSwipe=!0,b.query(function(b){console.log(b),a.training={list:b,total:b.length,pageSize:b.length/10}})}]).controller("TrainingDetailController",["$scope","$stateParams",function(a,b){a.traininglistId=b.traininglistId}]);