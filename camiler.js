function openCity(evt, cityName) {
    var i, sultan, slt;
    sultan = document.getElementsByClassName("sultan");
    for (i = 0; i < sultan.length; i++) {
        sultan[i].style.display = "none";
    }
    slt = document.getElementsByClassName("slt");
    for (i = 0; i < slt.length; i++) {
        slt[i].className = slt[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("sltOpen").click= "sultan" ;

  function openCity2(evt, cityName) {
    var i, camlica, cml;
    camlica = document.getElementsByClassName("camlica");
    for (i = 0; i < camlica.length; i++) {
        camlica[i].style.display = "none";
    }
    cml = document.getElementsByClassName("cml");
    for (i = 0; i < cml.length; i++) {
        cml[i].className = cml[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("cmlOpen").click= "camlica" ;

  function openCity3(evt, cityName) {
    var i, süleymaniye, sml;
    süleymaniye = document.getElementsByClassName("süleymaniye");
    for (i = 0; i < süleymaniye.length; i++) {
        süleymaniye[i].style.display = "none";
    }
    sml = document.getElementsByClassName("sml");
    for (i = 0; i < sml.length; i++) {
        sml[i].className = sml[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("smlOpen").click= "süleymaniye" ;