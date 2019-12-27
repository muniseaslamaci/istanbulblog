function openCity(evt, cityName) {
    var i, isfanbul, isf;
    isfanbul = document.getElementsByClassName("isfanbul");
    for (i = 0; i < isfanbul.length; i++) {
        isfanbul[i].style.display = "none";
    }
    isf = document.getElementsByClassName("isf");
    for (i = 0; i < isf.length; i++) {
        isf[i].className = isf[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("isfOpen").click= "isfanbul" ;

  function openCity2(evt, cityName) {
    var i, akvaryum, akv;
    akvaryum = document.getElementsByClassName("akvaryum");
    for (i = 0; i < akvaryum.length; i++) {
        akvaryum[i].style.display = "none";
    }
    akv = document.getElementsByClassName("akv");
    for (i = 0; i < akv.length; i++) {
        akv[i].className = akv[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("akvOpen").click= "akvaryum" ;

  function openCity3(evt, cityName) {
    var i, darıca, drc;
    darıca = document.getElementsByClassName("darıca");
    for (i = 0; i < darıca.length; i++) {
        darıca[i].style.display = "none";
    }
    drc = document.getElementsByClassName("drc");
    for (i = 0; i < drc.length; i++) {
        drc[i].className = drc[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("drcOpen").click= "darıca" ;

  function openCity4(evt, cityName) {
    var i, belgrad, bel;
    belgrad = document.getElementsByClassName("belgrad");
    for (i = 0; i < belgrad.length; i++) {
        belgrad[i].style.display = "none";
    }
    bel = document.getElementsByClassName("bel");
    for (i = 0; i < bel.length; i++) {
        bel[i].className = bel[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("belOpen").click= "belgrad" ;