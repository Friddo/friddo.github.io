

  var l = list;
  var k = Object.keys(list);
  console.log(k, k.length);
  var k1 = Math.round(Math.random()*k.length-1)
  var k2 = Math.round(Math.random()*k.length-1);
  console.log(k1,k2);
  var randLeft = list[k[k1]]
  var randRight = list[k[k2]]

  var slideIndexL = 1;
  var slideIndexR = 1;


  var lL = preloadChamp(k[k1], list[k[k1]])
  var lR = preloadChamp(k[k2], list[k[k2]])

  setTimeout(plusSlides(0, 3), 3000);


    // Next/previous controls
    function plusSlides(n, s) {
      if(s == 1) {
        showSlides(slideIndexL += n, 1);
      }
      if(s == 2) {
        showSlides(slideIndexR += n, 2);
      }
      if(s == 3) {
        showSlides(slideIndexL += n, 1);
        showSlides(slideIndexR += n, 2);
      }

    }


    function showSlides(n, s) {

      var slide = document.getElementsByClassName("slide");

      if(s == 1) {
        if (n > randLeft.length) {slideIndexL = 1}
        if (n < 1) {slideIndexL = randLeft.length}
        slide[0].style.backgroundImage = "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+k[k1]+"_"+randLeft[slideIndexL-1]+".jpg)";

      }
      if(s == 2) {
        if (n > randRight.length) {slideIndexR = 1}
        if (n < 1) {slideIndexR = randRight.length}
        slide[1].style.backgroundImage = "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+k[k2]+"_"+randRight[slideIndexR-1]+".jpg)";

      }


}



function preloadChamp(c, l) {
  var final = [];
  var baseurl = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+c+"_";

  for(var i = 0;i<l.length;i++) {
    var t = new Image();
    t.src = baseurl+l[i]+".jpg"
    final.push(t);
  }
  return final;
}
