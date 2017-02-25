//Make into a core/common js file later instead of reduplicating it

'use strict';

angular.module('homepageManager').controller('homeController', function($scope, chapterOneApi){
    $scope.revealSynopsis = true;

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

    $scope.isActiveSynopsis = true;
    $scope.isActiveFirstChapter =false;
    $scope.isActiveTableOfContents = false;

    $scope.toggleActiveSynopsis =function (){
        if($scope.isActiveSynopsis === true) {
            $scope.isActiveSynopsis = false
        } else {$scope.isActiveSynopsis = true;
            $scope.isActiveFirstChapter = false;
            $scope.isActiveTableOfContents = false;
        }
    };

    $scope.toggleActiveFirstChapter =function (){
        if($scope.isActiveFirstChapter === true) {
            $scope.isActiveFirstChapter = false
        } else {$scope.isActiveFirstChapter = true;
            $scope.isActiveSynopsis = false;
            $scope.isActiveTableOfContents = false;
        }
    };

    $scope.toggleActiveTableOfContents =function (){
        if($scope.isActiveTableOfContents === true) {
            $scope.isActiveTableOfContents = false
        } else {$scope.isActiveTableOfContents = true;
            $scope.isActiveSynopsis = false;
            $scope.isActiveFirstChapter = false;
        }
    };
});
