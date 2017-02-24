//Make into a core/common js file later instead of reduplicating it

'use strict';

angular.module('homepageManager').controller('homeController', function($scope, chapterOneApi){



    $scope.openSynopsis = function (){
        $scope.revealFirstChapter = false;
        $scope.revealTableOfContents = false;
        $scope.revealSynopsis = true;
    };

    $scope.openFirstChapter = function (){
        $scope.revealTableOfContents = false;
        $scope.revealSynopsis = false;
        $scope.revealFirstChapter = true;

    };

    $scope.openTableOfContents = function (){
        $scope.revealSynopsis = false;
        $scope.revealFirstChapter = false;
        $scope.revealTableOfContents = true;

    };
});
