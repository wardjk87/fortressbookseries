
'use strict';

angular.module('coreManager').controller('parallaxController', function($scope, parallaxHelper){
    $scope.slowest = parallaxHelper.createAnimator(-0.8);
    $scope.slower = parallaxHelper.createAnimator(-0.5);
    $scope.slow = parallaxHelper.createAnimator(-0.2);
    $scope.medium = parallaxHelper.createAnimator(0.2);
    $scope.fast = parallaxHelper.createAnimator(0.5);

    $scope.fastest = parallaxHelper.createAnimator(.8)


});
