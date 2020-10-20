var bc = 0;
var sd = 0;

var lim = 10;


localStorage.clear();

var currQ = -1;

var qList = [

["Du sidder i en tom bus og en hot pige kommer ind, hvad gør du?",
["ingenting","pickup line","tilbyder hende din plads","står af"],
[[1,0],[3,1],[-2,-2],[0,-3]]],

["Du skal have et kæledyr, hvilket vælger du?",
["hund","kat","slange","indvandrer"],
[[1,0],[0,-1],[-1,0],[3,1]]],

["hvad er dit syn på kvinder?",
["syn på hvad?","all women are queens","if she breathes, she a thot","#ligestilling"],
[[3,0],[-2,-3],[1,1],[0,-1]]]

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
  if(bc>lim){bc = lim}
  if(sd>lim){sd = lim}
  if(bc<-lim){bc = -lim}
  if(sd<-lim){sd = -lim}
  console.log(bc,sd)

  }

  //next question
  currQ++;
  var a = [bc,sd]
  if(qList[currQ] == undefined) {
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
