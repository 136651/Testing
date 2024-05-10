// heading 
let title = document.getElementById("title");
title.style.position= "absolute";
title.style.top= "1%";
title.style.left= "40%";
title.style.fontSize= "30px";
title.style.color= "black";
title.innerHTML= "Community-Comment";


let first = document.getElementById("first");
first.style.position= "absolute";
first.style.backgroundColor = "beige";
first.style.width= "100%";
first.style.top= "0";
first.style.height= "10%";

let line = document.createElement("hr");
line.style.position= "absolute";
line.style.top= "9%";
line.style.width= "100%";
line.style.height= "1px";
line.style.backgroundColor= "black";
document.body.appendChild(line);

// more information option 
let signIn = document.getElementById("sign-in");
signIn.style.position= "absolute";
signIn.style.top= "1%";
signIn.style.left= "90%";
signIn.style.fontSize= "30px";
signIn.style.color= "black";
signIn.innerHTML= "More-Info";
signIn.addEventListener("click", function(){
  window.location.href="MoreInfoPage.html"
})
signIn.style.cursor="pointer";
signIn.addEventListener("mouseover", function(){
  signIn.style.color= "red";
})
signIn.addEventListener("mouseout", function(){
  signIn.style.color= "black";
})

// Browse option 
let Browse = document.getElementById("Browse")
Browse.style.position= "absolute"
Browse.style.top= "1%"
Browse.style.left= "5%"
Browse.style.fontSize= "30px"
Browse.style.color= "black"
Browse.innerHTML= "Browse"
Browse.addEventListener("click", function(){
  window.location.href="OptionsPage.html"
})
Browse.style.cursor="pointer";
Browse.addEventListener("mouseover", function(){
  Browse.style.color="red";
})
Browse.addEventListener("mouseout", function(){
  Browse.style.color="black";
})

let second = document.getElementById("second")
second.style.position= "absolute"
second.style.backgroundColor = "beige"
second.style.width= "100%"
second.style.top= "10%"
second.style.height= "56%"

// map image 
let map = document.getElementById("map")
map.style.position= "absolute"
map.style.top= "10%"
map.style.left= "25%"
map.style.width= "19.7%"
map.style.height= "71.5%"
map.style.border= "1px solid black"
map.style.borderRadius="10px"
map.src= "images/AA-electoralMap.jpeg"

// find out more option 
let voice = document.getElementById("voice")
voice.style.position= "absolute"
voice.style.top= "10%"
voice.style.left= "55%"
voice.innerHTML="Find<br> Out<br> More"
voice.style.border= "1px solid black"
voice.style.borderRadius="10px"
voice.style.fontSize= "60px"
voice.style.paddingLeft="6%"
voice.style.paddingRight="6%"
voice.style.paddingTop="4.7%"
voice.style.paddingBottom="4.7%"
voice.style.color= "white"
voice.style.backgroundColor= "red"
voice.addEventListener("mouseover",function(){
  voice.style.color="blue"
})
voice.addEventListener("mouseout",function(){
  voice.style.color="white"
})
voice.addEventListener("click", function(){
  window.location.href="MoreInfoPage.html"
})

let line2 = document.createElement("hr");
line2.style.position= "absolute";
line2.style.top= "65%";
line2.style.width= "100%";
line2.style.height= "1px";
line2.style.backgroundColor= "black";
document.body.appendChild(line2);

let third = document.getElementById("third")
third.style.position= "absolute"
third.style.backgroundColor = "beige"
third.style.height = "40%"
third.style.width= "100%"
third.style.top= "60%"

// Description message 
let paragraph = document.getElementById("paragraph")
paragraph.style.position= "absolute"
paragraph.style.top= "40%"
paragraph.style.left= "27%"
paragraph.style.fontSize= "30px"
paragraph.style.color= "black"
paragraph.innerHTML= "Community-Comment is a website where you can<br> learn about your community and post your opinion"
paragraph.style.border= "1px solid black"
paragraph.style.padding= "5px"


