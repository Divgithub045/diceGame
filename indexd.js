var Random1 = Math.random();
Random1 = Random1*6;
Random1=Math.floor(Random1)+1;
var Random2 = Math.random();
Random2 = Random2*6;
Random2=Math.floor(Random2)+1;
var randomImgURL1="images/dice"+Random1+".png";
var randomImgURL2="images/dice"+Random2+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",randomImgURL1);
document.getElementsByClassName("img2")[0].setAttribute("src",randomImgURL2);
if(Random1>Random2)
document.querySelectorAll("h1")[0].innerHTML = "Player1 Won";
else if(Random2>Random1)
    document.querySelectorAll("h1")[0].innerHTML = "Player2 Won";
else
    document.querySelectorAll("h1")[0].innerHTML ="Tie";
