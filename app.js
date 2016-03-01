$(document).ready(function(){
  $("#output").hide();
  $('#btn1').click(function(){
    $("#output").show();
    //console.log("button clicked");
    var cityName = $("#city").val();
    var urlStr =
    'http://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&APPID=8b1fa51c9890086a03a97d35d7bc5b6b';
    console.log(urlStr);

    $.ajax({
      url: urlStr,
      error: function(){
        console.log("error");
      },
      success: function(data){
        console.log(data);

        for(var i=1; i<=3; i++){
          var temprature = Math.round(data.list[i].main.temp - 273.5, 2);
          var humidity = data.list[i].main.humidity;
          var description = data.list[i].weather[0].description;
          var domElement=$('#day'+i);
          $(domElement).children('#temp').text(temprature);
          $(domElement).children('#humid').text(humidity);
          $(domElement).children('#feel').text(description);
        }

      },
    });
  });
  // var currentDate = new Date();
  // var day = currentDate.getDate();--++---++++****
  // var month = currentDate.getMonth() + 1;
  // var year = currentDate.getFullYear();
  // $('#today').append(day + "/" + month + "/"  + year);
  // var currentDate = new Date();
  // var day = currentDate.getDate();
  // var month = currentDate.getMonth() + 1;
  // var year = currentDate.getFullYear();
  // $('#tomorrow').append(day + "/" + month + "/"  + year);
  // var currentDate = new Date();
  // var day = currentDate.getDate();
  // var month = currentDate.getMonth() + 1;
  // var year = currentDate.getFullYear();
  // $('#3').append(day + "/" + month + "/"  + year);

});
