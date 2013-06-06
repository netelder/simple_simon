$(document).ready(function(){
  $('#get_color').on('click', function(e){
    event.preventDefault();
      $.ajax({
        url: "/color",
        type: "POST"
      }).done(function(data){
        $("#color_me li:nth-child(" + data.cell + ")").css("background-color", data.color);
      });
  });
});
