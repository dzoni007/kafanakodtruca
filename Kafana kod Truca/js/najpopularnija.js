$(document).ready(function () {
    var promenjeno = false;
  
    $("#popularna").click(function () {
      var karadjordjeva = $("#karadjordjeva");
      var mesano = $("#mesano");
      var pecenjeJ = $("#pecenjeJ");
      var pecenjeP = $("#pecenjeP");
  
      if (!promenjeno) {
        karadjordjeva.animate({
          'color': "white",
          "font-size": "25px",
        });
  
        mesano.animate({
          'color': "white",
          "font-size": "25px",
        });
  
        pecenjeJ.animate({
          'color': "white",
          "font-size": "25px",
        });
        pecenjeP.animate({
          'color': "white",
          "font-size": "25px",
        });
      } else {
          karadjordjeva.animate({
              'color': "black",
              "font-size": "15px",
            });
  
            mesano.animate({
              'color': "black",
              "font-size": "15px",
            });
  
            pecenjeJ.animate({
              'color': "black",
              "font-size": "15px",
            });
            pecenjeP.animate({
              'color': "black",
              "font-size": "15px",
            });
      }
      promenjeno = !promenjeno;
    });
  });