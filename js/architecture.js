$(function(){
  $(".rejilla").click(function(){
    $("#escondido").css({
      "position":"fixed",
      "opacity" :"1",
      "z-index" : "2000"
    });
    $("#divs").css({

    });
    $(".divsEscondidos").css({
      "opacity" :"1"
    });
    $("#logoEscondido img").css({
      "opacity" :"1"
    });
  });

  $("#equisEscondido").click(function(){

    $("#escondido").css({
      "position":"relative",
      "opacity" :"0",
      "z-index" : "-2000"
    });
    $("#divs").css({

    });
    $(".divsEscondidos").css({
      "opacity" :"0"
    });
    $("#logoEscondido img").css({
      "opacity" :"0"
    });
  });
});
