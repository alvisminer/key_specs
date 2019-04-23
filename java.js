
function refreshManufacturer() {
  var obj = document.getElementById("manufacturer");
  obj.options[obj.selectedIndex].text;
  var manufacturer = obj.options[obj.selectedIndex].text;

  /*Cut spacing template:*/
  document.getElementById("cut1").innerHTML = document.getElementsByClassName(manufacturer)[0].innerHTML;
  document.getElementById("cut2").innerHTML = document.getElementsByClassName(manufacturer)[1].innerHTML;
  document.getElementById("cut3").innerHTML = document.getElementsByClassName(manufacturer)[2].innerHTML;
  document.getElementById("cut4").innerHTML = document.getElementsByClassName(manufacturer)[3].innerHTML;
  document.getElementById("cut5").innerHTML = document.getElementsByClassName(manufacturer)[4].innerHTML;
  document.getElementById("cut6").innerHTML = document.getElementsByClassName(manufacturer)[5].innerHTML;
  document.getElementById("cut7").innerHTML = document.getElementsByClassName(manufacturer)[6].innerHTML;
  document.getElementById("cut8").innerHTML = document.getElementsByClassName(manufacturer)[7].innerHTML;
  document.getElementById("cut9").innerHTML = document.getElementsByClassName(manufacturer)[8].innerHTML;
  document.getElementById("cut10").innerHTML = document.getElementsByClassName(manufacturer)[9].innerHTML;

  /*Bitting depth template:*/
  document.getElementById("depth0").innerHTML = document.getElementsByClassName(manufacturer)[10].innerHTML;
  document.getElementById("depth1").innerHTML = document.getElementsByClassName(manufacturer)[11].innerHTML;
  document.getElementById("depth2").innerHTML = document.getElementsByClassName(manufacturer)[12].innerHTML;
  document.getElementById("depth3").innerHTML = document.getElementsByClassName(manufacturer)[13].innerHTML;
  document.getElementById("depth4").innerHTML = document.getElementsByClassName(manufacturer)[14].innerHTML;
  document.getElementById("depth5").innerHTML = document.getElementsByClassName(manufacturer)[15].innerHTML;
  document.getElementById("depth6").innerHTML = document.getElementsByClassName(manufacturer)[16].innerHTML;
  document.getElementById("depth7").innerHTML = document.getElementsByClassName(manufacturer)[17].innerHTML;
  document.getElementById("depth8").innerHTML = document.getElementsByClassName(manufacturer)[18].innerHTML;
  document.getElementById("depth9").innerHTML = document.getElementsByClassName(manufacturer)[19].innerHTML;
  document.getElementById("depth10").innerHTML = document.getElementsByClassName(manufacturer)[20].innerHTML;

  /*Pin height table:*/
  document.getElementById("pin0").innerHTML = document.getElementsByClassName(manufacturer)[21].innerHTML;
  document.getElementById("pin1").innerHTML = document.getElementsByClassName(manufacturer)[22].innerHTML;
  document.getElementById("pin2").innerHTML = document.getElementsByClassName(manufacturer)[23].innerHTML;
  document.getElementById("pin3").innerHTML = document.getElementsByClassName(manufacturer)[24].innerHTML;
  document.getElementById("pin4").innerHTML = document.getElementsByClassName(manufacturer)[25].innerHTML;
  document.getElementById("pin5").innerHTML = document.getElementsByClassName(manufacturer)[26].innerHTML;
  document.getElementById("pin6").innerHTML = document.getElementsByClassName(manufacturer)[27].innerHTML;
  document.getElementById("pin7").innerHTML = document.getElementsByClassName(manufacturer)[28].innerHTML;
  document.getElementById("pin8").innerHTML = document.getElementsByClassName(manufacturer)[29].innerHTML;
  document.getElementById("pin9").innerHTML = document.getElementsByClassName(manufacturer)[30].innerHTML;
  document.getElementById("pin10").innerHTML = document.getElementsByClassName(manufacturer)[31].innerHTML;
  
  /*Other specs table:*/
  document.getElementById("pin_diameter").innerHTML = document.getElementsByClassName(manufacturer)[32].innerHTML;
  document.getElementById("macs_rating").innerHTML = document.getElementsByClassName(manufacturer)[33].innerHTML;
  document.getElementById("cut_angle").innerHTML = document.getElementsByClassName(manufacturer)[34].innerHTML;
  document.getElementById("cut_width").innerHTML = document.getElementsByClassName(manufacturer)[35].innerHTML;


}



