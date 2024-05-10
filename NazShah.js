
let title = document.getElementById("title");
title.style.position= "absolute";
title.style.top= "1%";
title.style.left= "43%";
title.style.fontSize= "30px";
title.style.color= "black";
title.innerHTML= "Naz Shah";


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

// Home Page Link 
let signIn = document.getElementById("sign-in");
signIn.style.position= "absolute";
signIn.style.top= "1%";
signIn.style.left= "90%";
signIn.style.fontSize= "30px";
signIn.style.color= "black";
signIn.innerHTML= "Home";
signIn.addEventListener("click", function(){
  window.location.href="HomePage.html"
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

// Main Section 
let second = document.getElementById("second")
second.style.position= "absolute"
second.style.backgroundColor = "beige"
second.style.width= "100%"
second.style.top= "10%"
second.style.height= "90%"

let line2 = document.createElement("hr");
line2.style.position= "absolute";
line2.style.top= "80%";
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

let list = document.getElementById("list")
list.style.position= "absolute"
list.style.top= "180px"
list.style.left= "1030px"
list.style.zIndex= "1"
list.style.listStyleType = "none"
list.style.border = "5px solid black"
list.style.paddingRight = "25px"
list.style.paddingTop = "10px"
list.style.paddingBottom = "10px"

// Naz Shah Image 
let img = document.getElementById("img")
img.style.position= "absolute"
img.style.top= "150px"
img.style.left= "600px"
img.style.width= "250px"
img.style.height= "250px"
img.style.border= "5px solid black"
img.style.borderRadius = "25px"

// Facebook Link
let facebook = document.getElementById("facebook")
facebook.href = "https://www.facebook.com/NazShahMP/?locale=en_GB"
facebook.innerHTML="facebook"
facebook.style.textDecoration="none"
facebook.style.color="black"
facebook.addEventListener("mouseover", function(){
  facebook.style.color= "red";
})
facebook.addEventListener("mouseout", function(){
  facebook.style.color= "black";
})

// Twitter Link 
let twitter = document.getElementById("twitter")
twitter.href = "https://twitter.com/NazShahBfd?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
twitter.innerHTML="twitter"
twitter.style.textDecoration="none"
twitter.style.color="black"
twitter.addEventListener("mouseover", function(){
  twitter.style.color= "red";
})
twitter.addEventListener("mouseout", function(){
  twitter.style.color= "black";
})

let website = document.getElementById("website")
website.href = "https://members.parliament.uk/member/4409/contact"
website.innerHTML="website"
website.style.textDecoration="none"
website.style.color="black"
website.addEventListener("mouseover", function(){
  website.style.color= "red";
})
website.addEventListener("mouseout", function(){
  website.style.color= "black";
})

// Labour Image 
let img1 = document.createElement("img")
img1.src = "images/AA-Labour.jpg"
img1.style.height = "250px"
img1.style.width = "250px"
img1.style.borderRadius = "25px"
img1.style.position = "absolute"
img1.style.top = "235px"
img1.style.left = "160px"
img1.style.border = "5px solid black"
document.body.appendChild(img1)