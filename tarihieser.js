function openCity(evt, cityName) {
    var i, dolmabahce, dlm;
    dolmabahce = document.getElementsByClassName("dolmabahce");
    for (i = 0; i < dolmabahce.length; i++) {
        dolmabahce[i].style.display = "none";
    }
    dlm = document.getElementsByClassName("dlm");
    for (i = 0; i < dlm.length; i++) {
        dlm[i].className = dlm[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("dlmOpen").click= "dolmabahce" ;

  function openCity2(evt, cityName) {
    var i, beylerbeyi, bs;
    beylerbeyi = document.getElementsByClassName("beylerbeyi");
    for (i = 0; i < beylerbeyi.length; i++) {
        beylerbeyi[i].style.display = "none";
    }
    bs = document.getElementsByClassName("bs");
    for (i = 0; i < bs.length; i++) {
        bs[i].className = bs[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("bsOpen").click= "beylerbeyi" ;

  function openCity3(evt, cityName) {
    var i, ciragan, cs;
    ciragan = document.getElementsByClassName("ciragan");
    for (i = 0; i < ciragan.length; i++) {
        ciragan[i].style.display = "none";
    }
    cs = document.getElementsByClassName("cs");
    for (i = 0; i < cs.length; i++) {
        cs[i].className = cs[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("csOpen").click= "ciragan" ;

  function openCity4(evt, cityName) {
    var i, topkapi, ts;
    topkapi = document.getElementsByClassName("topkapi");
    for (i = 0; i < topkapi.length; i++) {
        topkapi[i].style.display = "none";
    }
    ts = document.getElementsByClassName("ts");
    for (i = 0; i < ts.length; i++) {
        ts[i].className = ts[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("tsOpen").click= "topkapi" ;

  function openCity5(evt, cityName) {
    var i, ayasofya, ay;
    ayasofya = document.getElementsByClassName("ayasofya");
    for (i = 0; i < ayasofya.length; i++) {
        ayasofya[i].style.display = "none";
    }
    ay = document.getElementsByClassName("ay");
    for (i = 0; i < ay.length; i++) {
        ay[i].className = ay[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("ayOpen").click= "ayasofya" ;

  
  function openCity6(evt, cityName) {
    var i, yerebatan, ys;
    yerebatan = document.getElementsByClassName("yerebatan");
    for (i = 0; i < yerebatan.length; i++) {
        yerebatan[i].style.display = "none";
    }
    ys = document.getElementsByClassName("ys");
    for (i = 0; i < ys.length; i++) {
        ys[i].className = ys[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("ysOpen").click= "yerebatan" ;

  function openCity7(evt, cityName) {
    var i, madame, mi;
    madame = document.getElementsByClassName("madame");
    for (i = 0; i < madame.length; i++) {
        madame[i].style.display = "none";
    }
    mi = document.getElementsByClassName("mi");
    for (i = 0; i < mi.length; i++) {
        mi[i].className = mi[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("miOpen").click= "madame" ;

  function openCity8(evt, cityName) {
    var i, panorama, pm;
    panorama = document.getElementsByClassName("panorama");
    for (i = 0; i < panorama.length; i++) {
        panorama[i].style.display = "none";
    }
    pm = document.getElementsByClassName("pm");
    for (i = 0; i < pm.length; i++) {
        pm[i].className = pm[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("pmOpen").click= "panorama" ;