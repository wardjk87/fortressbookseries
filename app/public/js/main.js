$(document).ready(function() {
    $('#bookTitle').waypoint(function () {
        $('#bookTitle').addClass('fadeIn');
    }, {offset: '80%'});
    $('#bookSubTitle').waypoint(function () {
        $('#bookSubTitle').addClass('fadeIn');
    }, {offset: '80%'});
    $('#bookAuthor').waypoint(function () {
        $('#bookAuthor').addClass('fadeIn');
    }, {offset: '80%'});
});
