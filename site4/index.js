var num = Math.random()*6;
num = Math.floor(num)+1;

var lnk = "./images/dice"+num+".png";
    document.querySelector(".img1").setAttribute("src", lnk);

var num2 = Math.random()*6;
num2 = Math.floor(num2)+1;

var lnk2 = "./images/dice"+num2+".png";
    document.querySelector(".img2").setAttribute("src", lnk2);

if(num>num2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if(num2>num){
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}