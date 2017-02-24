'use strict';

angular.module('homepageManager').component('chapterSampleComponent', {
    templateUrl: "home/home.template-chapterSample.html",
    controller: function($scope, chapterOneApi) {
    $scope.chapterOne = chapterOneApi.getChapterOneContent();
    console.log($scope.chapterOne);
    console.log($scope.chapterOne.paragraphs);
    }
});
