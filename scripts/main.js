$(document).ready(function () {

    var date = new Date();
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June'
    , 'July', 'August', 'September', 'October', 'November', 'December'];

    var dateScreen=`${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    $(".date").text(dateScreen);

});