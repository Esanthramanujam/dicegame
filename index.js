

var randomnumber1 =Math.floor(Math.random()*6)+1;
var randomnumber2 =Math.floor(Math.random()*6)+1;

var image1 = "images/dice"+ randomnumber1 +".png";
var image2 = "images/dice"+ randomnumber2 +".png";

document.querySelectorAll("img")[0].setAttribute("src", image1);
document.querySelectorAll("img")[1].setAttribute("src", image2);

if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML ="player1 wins";
}else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="player2 wins";
}else{
    document.querySelector("h1").innerHTML="draw";
}