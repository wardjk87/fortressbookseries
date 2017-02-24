$(document).ready(function() {
    $('#bookTitle').waypoint(function () {
        $('#bookTitle').addClass('bounceInLeft');
    }, {offset: '80%'});
    $('#bookSubTitle').waypoint(function () {
        $('#bookSubTitle').addClass('bounceInLeft');
    }, {offset: '80%'});
    $('#bookAuthor').waypoint(function () {
        $('#bookAuthor').addClass('bounceInLeft');
    }, {offset: '80%'});
});
