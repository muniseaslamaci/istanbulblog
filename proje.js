function openCity(evt, cityName) {
  var i, tabcontent, tablinks1;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks1[i].className = tablinks1[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click= "tabcontent1" ;

function openCity2(evt, cityName) {
  var i, galata, glt;
  galata = document.getElementsByClassName("galata");
  for (i = 0; i < galata.length; i++) {
    galata[i].style.display = "none";
  }
  glt = document.getElementsByClassName("glt");
  for (i = 0; i < glt.length; i++) {
    glt[i].className = glt[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("gltOpen").click= "galata" ;

function openCity3(evt, cityName) {
  var i, rumeli, rml;
  rumeli = document.getElementsByClassName("rumeli");
  for (i = 0; i < rumeli.length; i++) {
    rumeli[i].style.display = "none";
  }
  rml = document.getElementsByClassName("rml");
  for (i = 0; i < rml.length; i++) {
    rml[i].className = rml[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("rumeliOpen").click= "rumeli" ;


function openCity4(evt, cityName) {
  var i, belgrad, blg;
  belgrad = document.getElementsByClassName("belgrad");
  for (i = 0; i < belgrad.length; i++) {
    belgrad[i].style.display = "none";
  }
  blg = document.getElementsByClassName("blg");
  for (i = 0; i < blg.length; i++) {
    blg[i].className = blg[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("blgOpen").click= "belgrad" ;