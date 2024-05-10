let first = document.getElementById("first")
first.style.position = "absolute"
first.style.backgroundColor = "beige"
first.style.color = "black"
first.style.height = "10%"
first.style.width = "100%"

let line = document.createElement("hr");
line.style.position= "absolute";
line.style.top= "9%";
line.style.width= "100%";
line.style.height= "1px";
line.style.backgroundColor= "black";
document.body.appendChild(line);

let home1 = document.getElementById("Home")
home1.style.position = "absolute"
home1.innerHTML = "Home"
home1.style.top = "5%"
home1.style.left = "5%"
home1.style.color = "black"
home1.style.fontSize = "30px"
home1.addEventListener("click", function(){
  window.location.href = "HomePage.html"
})
home1.addEventListener("mouseover", function(){
  home1.style.color = "red"
})
home1.addEventListener("mouseout", function(){
  home1.style.color = "black"
})
home1.style.cursor = "pointer"

// Browse option 
let Browse = document.getElementById("Browse")
Browse.style.position= "absolute"
Browse.style.top= "0.1%"
Browse.style.left= "90%"
Browse.style.fontSize= "30px"
Browse.style.color= "black"
Browse.innerHTML= "Browse"
Browse.addEventListener("click", function(){
  window.location.href="OptionsPage.html"
})
Browse.style.cursor="pointer";
Browse.style.fontWeight = "bolder";
Browse.addEventListener("mouseover", function(){
  Browse.style.color = "red"
})
Browse.addEventListener("mouseout", function(){
  Browse.style.color = "black"
})

// Main Section 
let second = document.getElementById("second")
second.style.position = "absolute"
second.style.backgroundColor = "beige"
second.style.color = "black"
second.style.height = "91%"
second.style.width = "100%"
second.style.top = "10%"

let Community = document.getElementById("Community")
Community.style.position = "absolute"
Community.innerHTML = "Keighley and Ilkley"
Community.style.top = "1%"
Community.style.left = "40%"
Community.style.color = "black"
Community.style.fontSize = "30px"


/*this is the comments header*/
let commentToday = document.getElementById("commentToday")
commentToday.style.position = "absolute"
commentToday.style.top = "470px"
commentToday.style.left = "190px"
commentToday.style.fontSize = "30px"
commentToday.style.fontWeight = "bolder"
commentToday.style.zIndex = "1"
commentToday.style.textDecoration = "none"
commentToday.style.color = "white"
commentToday.style.border = "1px solid black"
commentToday.style.borderRadius = "10px"
commentToday.style.padding = "70px"
commentToday.style.backgroundColor = "red"
commentToday.addEventListener( "mouseover",function(){
  commentToday.style.color = "blue"
})
commentToday.addEventListener( "mouseout",function(){
  commentToday.style.color = "white"
})

/***poll section**/
let pollLink = document.getElementById("poll-link")
pollLink.style.position = "absolute"
pollLink.style.top = "180px"
pollLink.style.left = "190px"
pollLink.style.fontSize = "30px"
pollLink.style.fontWeight = "bolder"
pollLink.style.zIndex = "1"
pollLink.style.textDecoration = "none"
pollLink.style.color = "white"
pollLink.style.border = "1px solid black"
pollLink.style.borderRadius = "10px"
pollLink.style.paddingRight = "110px"
pollLink.style.paddingLeft = "110px"
pollLink.style.paddingTop = "65px"
pollLink.style.paddingBottom = "65px"
pollLink.style.backgroundColor = "red"
pollLink.addEventListener( "mouseover",function(){
  pollLink.style.color = "blue"
})
pollLink.addEventListener( "mouseout",function(){
  pollLink.style.color = "white"
})

let resultsLink = document.getElementById("resultsLink")
resultsLink.style.position = "absolute"
resultsLink.style.top = "180px"
resultsLink.style.left = "890px"
resultsLink.style.fontSize = "30px"
resultsLink.style.fontWeight = "bolder"
resultsLink.style.zIndex = "1"
resultsLink.style.textDecoration = "none"
resultsLink.style.color = "white"
resultsLink.style.border = "1px solid black"
resultsLink.style.borderRadius = "10px"
resultsLink.style.paddingRight = "150px"
resultsLink.style.paddingLeft = "150px"
resultsLink.style.paddingTop = "65px"
resultsLink.style.paddingBottom = "65px"
resultsLink.style.backgroundColor = "red"
resultsLink.addEventListener( "mouseover",function(){
  resultsLink.style.color = "blue"
})
resultsLink.addEventListener( "mouseout",function(){
  resultsLink.style.color = "white"
})



let line1 = document.createElement("hr");
line1.style.position= "absolute";
line1.style.top= "90%";
line1.style.width= "100%";
line1.style.height= "1px";
line1.style.backgroundColor= "black";
document.body.appendChild(line1);

/* Blue padding for information */

let information = document.getElementById("information")
information.style.position = "absolute"
information.style.top = "470px"
information.style.left = "880px"
information.style.backgroundColor = "lightBlue"
information.style.height = "180px"
information.style.width = "400px"
information.style.borderRadius = "10px"
information.style.border = "1px solid black"


// written information on mp
let localMp = document.getElementById("local-Mp")
localMp.style.position = "absolute"
localMp.style.top = "380px"
localMp.style.left = "880px"
localMp.innerHTML = "Your local MP is: Robbie Moore<br> Party: conseratives <br> Consituency: Ilkley and keighley<br>(Robbie Moore (MP), 2024)"
localMp.style.zIndex = "1"

// Robbie Moore Image 
let img1 = document.getElementById("img1")
img1.style.position = "absolute"
img1.style.top = "550px"
img1.style.left = "1180px"
img1.style.height = "90px"
img1.style.width = "90px"
img1.style.zIndex = "1"
img1.style.borderRadius = "20px"

let socialMedia = document.getElementById("socialMedia")
socialMedia.style.position = "absolute"
socialMedia.style.top = "585px"
socialMedia.style.left = "890px"
socialMedia.innerHTML = "Social Media information"
socialMedia.style.zIndex = "1"
socialMedia.style.paddingTop = "10px"
socialMedia.style.paddingBottom = "10px"
socialMedia.style.paddingLeft = "10px"
socialMedia.style.paddingRight = "10px"
socialMedia.style.borderRadius = "10px"
socialMedia.style.backgroundColor = "red"
socialMedia.addEventListener("click", function(){
  window.location.href="RobbieMoore.html"
})
socialMedia.addEventListener( "mouseover",function(){
  socialMedia.style.color = "blue"
})
socialMedia.addEventListener( "mouseout",function(){
  socialMedia.style.color = "black"
})
socialMedia.style.cursor = "pointer"
