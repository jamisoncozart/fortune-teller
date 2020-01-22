$(document).ready(function(){
  $("button").click(function(event){
    var goodcheck = 0
    var badcheck = 0
    event.preventDefault();
    $("#panelgood").show();
    $("input:checkbox[name=luckyevent]:checked").each(function(){
      goodcheck += parseInt($(this).val());
    })
    console.log(goodcheck)
    $("#panelbad").show();
    $("input:checkbox[name=badevent]:checked").each(function(){
      badcheck += parseInt($(this).val());
    })
    console.log(badcheck);
    if (goodcheck > badcheck){
      $("#panelgood").show();
      $("#panelbad").hide();
    } else if (badcheck > goodcheck){
      $("#panelbad").show();
      $("#panelgood").hide();
    } else {
      $("#panelbad").show();
      $("#panelgood").show();
    }
  })
})