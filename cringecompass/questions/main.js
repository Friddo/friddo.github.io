var bc = 0;
var sd = 0;

localStorage.clear();

var currQ = -1;

var qList = [

["Du sidder i en tom bus og en hot pige kommer ind, hvad gør du?",
["Ingenting","Pickup line","Tilbyder hende din plads","Står af"],
[[1,0],[3,1],[-2,-2],[0,-3]]],

["Du skal have et kæledyr, hvilket vælger du?",
["hund","kat","slange","indvandrer"],
[[1,0],[0,-1],[-1,0],[3,1]]],

["Hvad er dit syn på kvinder?",
["syn på hvad?","all women are queens","if she breathes, she a thot","#ligestilling"],
[[3,0],[-2,-3],[1,1],[0,-1]]],

["Du er blevet sat i karantæne, hvad gør du?",
["faker negativ test","isolerer dig selv og følger med i skolen på teams","spiller League of Legends med gutterne","holder 18-års"],
[[1,2],[-2,-2],[0,1],[2,2]]],

["Yndlingsspil?",
["League of Legends","World of Warcraft","Among Us","Minecraft"],
[[-2,-1],[-2,1],[-1,-1],[1,0]]],

["Du har sovet over dig og klokken er tyve minutter over otte, hvad gør du?",
["skynder mig i skole","skriver på gruppechatten at dit tog blev forsinket","lader som om du er syg","går i seng igen"],
[[-1,0],[-2,-1],[-1,1],[2,2]]],

["Du har inviteret et par venner ud til frokost, hvor spiser I?",
["den lokale kebab","starbucks","McDonald's","hjemme hos dig"],
[[-1,-1],[-2,-2],[1,-1],[1,2]]],
  
["En person har skrevet en negativ kommentar på dit facebookopslag, hvad gør du?",
["poster deres adresse","indleder tredje verdenskrig i kommentarerne","ignorerer dem","sletter deres kommentar"],
[[2,2],[-2,1],[0,-1],[1,-1]]],
  
["du er udenlands i en højrisiko smittezone, hvad gør du?",
["tager på sightseeing uden foranstaltninger","passer på som et ansvarligt og samfundsbevidst menneske","har sex med halvdelen af byen","tager hjem"],
[[-1,1],[-1,-1],[2,2],[-2,-2]]]

];

function next() {

  if(currQ != -1) {

  //get answers
  var a1 = document.getElementById("option1").checked;
  var a2 = document.getElementById("option2").checked;
  var a3 = document.getElementById("option3").checked;
  var a4 = document.getElementById("option4").checked;
  var ans = 1*a1 + 2*a2 + 3*a3 + 4*a4;
  //if no option is selected, break
  if (ans==0) {return;}

  bc += qList[currQ][2][ans-1][0]
  sd += qList[currQ][2][ans-1][1]

  }

  //next question
  currQ++;
  if(qList[currQ] == undefined) {
    bc = 20/(1+Math.exp(-0.2*bc))-10
    sd = 20/(1+Math.exp(-0.2*sd))-10
    var a = [bc,sd]
    localStorage.setItem("score",JSON.stringify(a));
    window.location.href='../score.html';
  }


  //update text
  document.getElementById("question").innerHTML = qList[currQ][0];

  document.getElementById("option1l").innerHTML = qList[currQ][1][0];
  document.getElementById("option2l").innerHTML = qList[currQ][1][1];
  document.getElementById("option3l").innerHTML = qList[currQ][1][2];
  document.getElementById("option4l").innerHTML = qList[currQ][1][3];

  document.getElementById("option1").checked = false;
  document.getElementById("option2").checked = false;
  document.getElementById("option3").checked = false;
  document.getElementById("option4").checked = false;



}
