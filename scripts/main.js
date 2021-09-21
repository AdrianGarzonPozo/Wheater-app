$(document).ready(function () {

    var date = new Date();
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June'
        , 'July', 'August', 'September', 'October', 'November', 'December'];

    var dateScreen = `${days[date.getDay() - 1]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    $(".date").text(dateScreen);

    wheaterCity("Madrid");

    $.fn.pressEnter = function(fn) {  
  
        return this.each(function() {  
            $(this).bind('enterPress', fn);
            $(this).keyup(function(e){
                if(e.keyCode == 13)
                {
                  $(this).trigger("enterPress");
                }
            })
        });  
     }; 
    
    
    $('input:first').pressEnter(function(){
        wheaterCity($("input:first").val());
    })


});


function wheaterCity(city) {
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9738c7d2e9ba5012d651f2e4a710ff01&units=metric`)
        .done(function (response) {
            console.log(response);
            $(".city").text(response.name);
            $(".temp").text(response.main.temp+'º');
            $(".temp-inf").text(response.weather[0].main);
            $(".min").text(response.main.temp_min);
            $(".max").text(response.main.temp_max);
            $(".humidity span").text(response.main.humidity+'%');
            $(".presure span").text(response.main.pressure+' hPa');
            $(".wind span").text(response.wind.speed+' Km/h');
        }).fail(function (jqXHR) {
            alert('City '+jqXHR.statusText);
        });;
}