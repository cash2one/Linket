/*! ross */
"use strict";angular.module("PersonalInfoServices",["ngResource","commonServices"]).factory("PersonalListService",["$resource","configData",function(a,b){var c=b.basePath+"data/personalInfo/personalList.json";return a(c,{},{})}]);