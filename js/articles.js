$(function(){
  $(window).scroll(function(){
    var win = $(window).height();//altura del browser
    var barra = $(window).scrollTop();//altura de la barra

    $(".opac").each(function(){//es un ciclo que coge cada valor elemento html que tiene la clase .opac

      $(this).addClass("epalza");//agrega la clase epalza

      var x = $(".epalza").offset().top;//busca en que posicion referente a Y esta el objeto

      var bottom = win + barra;//suma la altura del browser y la cantidad de pixeles del scroll

      if(x<bottom){//si epalza es menor que el bottom de la pagina
        $(".epalza").css("transform","translateY(0px)").css("opacity","1");
        }
        $(this).removeClass("epalza");//remueve epalza
    });



  });
});
