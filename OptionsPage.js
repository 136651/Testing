
let theTitle = document.getElementById("title1");
theTitle.style.position = "absolute";
theTitle.style.top = "0.1%";
theTitle.style.left = "37%";
theTitle.innerHTML = "Community-Comment";
theTitle.style.fontSize = "30px";
theTitle.style.color = "black";
theTitle.style.fontFamily = "sans-serif";
theTitle.style.fontWeight = "bolder";

let line = document.createElement("hr");
line.style.position= "absolute";
line.style.top= "9%";
line.style.width= "100%";
line.style.height= "1px";
line.style.backgroundColor= "black";
document.body.appendChild(line);

let line1 = document.createElement("hr");
line1.style.position= "absolute";
line1.style.top= "90%";
line1.style.width= "100%";
line1.style.height= "1px";
line1.style.backgroundColor= "black";
document.body.appendChild(line1);

// Keighley Link 
let opt1 = document.getElementById("option1");
opt1.style.position = "absolute";
opt1.style.top = "19%";
opt1.style.left = "24%";
opt1.innerHTML = "Keighley And Ilkley";
opt1.style.fontSize= "30px";
opt1.style.color = "black";
opt1.style.fontFamily = "sans-serif";
opt1.style.fontWeight = "bolder";
opt1.style.paddingTop= "10px";
opt1.style.paddingBottom= "10px";
opt1.style.paddingLeft= "300px";
opt1.style.paddingRight= "210px";
opt1.style.borderRadius = "10px";
opt1.style.backgroundColor = "#FFE5CC";
opt1.addEventListener("mouseover",function(){
  opt1.style.backgroundColor = "red";
})
opt1.addEventListener("mouseout",function(){
  opt1.style.backgroundColor = "#FFE5CC";
})
opt1.addEventListener("click",function(){
  window.location.href = "keighley.html"
})
opt1.style.cursor = "pointer"

// Bradford East Link 
let opt2 = document.getElementById("option2");
opt2.style.position = "absolute";
opt2.style.top = "29%";
opt2.style.left = "24%";
opt2.innerHTML = "Bradford East";
opt2.style.fontSize= "30px";
opt2.style.color = "black";
opt2.style.fontFamily = "sans-serif";
opt2.style.fontWeight = "bolder";
opt2.style.paddingTop= "10px";
opt2.style.paddingBottom= "10px";
opt2.style.paddingLeft= "300px";
opt2.style.paddingRight= "287px";
opt2.style.borderRadius = "10px";
opt2.style.backgroundColor = "#FFE5CC";
opt2.addEventListener("mouseover",function(){
  opt2.style.backgroundColor = "red";
})
opt2.addEventListener("mouseout",function(){
  opt2.style.backgroundColor = "#FFE5CC";
})
opt2.style.cursor = "pointer"
opt2.addEventListener("click",function(){
  window.location.href = "BradfordEast.html"
})

// Bradford South Link 
let opt3 = document.getElementById("option3");
opt3.style.position = "absolute";
opt3.style.top = "39%";
opt3.style.left = "24%";
opt3.innerHTML = "Bradford South";
opt3.style.fontSize= "30px";
opt3.style.color = "black";
opt3.style.fontFamily = "sans-serif";
opt3.style.fontWeight = "bolder";
opt3.style.paddingTop= "10px";
opt3.style.paddingBottom= "10px";
opt3.style.paddingLeft= "300px";
opt3.style.paddingRight= "270px";
opt3.style.borderRadius = "10px";
opt3.style.backgroundColor = "#FFE5CC";
opt3.addEventListener("mouseover",function(){
  opt3.style.backgroundColor = "red";
})
  opt3.addEventListener("mouseout",function(){
    opt3.style.backgroundColor = "#FFE5CC";
})
opt3.style.cursor = "pointer"
opt3.addEventListener("click",function(){
  window.location.href = "BradfordSouth.html"
})

// Bradford West Link 
let opt4 = document.getElementById("option4");
opt4.style.position = "absolute";
opt4.style.top = "49%";
opt4.style.left = "24%";
opt4.innerHTML = "Bradford West";
opt4.style.fontSize= "30px";
opt4.style.color = "black";
opt4.style.fontFamily = "sans-serif";
opt4.style.fontWeight = "bolder";
opt4.style.paddingTop= "10px";
opt4.style.paddingBottom= "10px";
opt4.style.paddingLeft= "300px";
opt4.style.paddingRight= "287px";
opt4.style.borderRadius = "10px";
opt4.style.backgroundColor = "#FFE5CC";
opt4.addEventListener("mouseover",function(){
  opt4.style.backgroundColor = "red";
})
  opt4.addEventListener("mouseout",function(){
    opt4.style.backgroundColor = "#FFE5CC";
})
opt4.style.cursor = "pointer"
opt4.addEventListener("click",function(){
  window.location.href = "BradfordWest.html"
})

// Halifax Link 
let opt5 = document.getElementById("option5");
opt5.style.position = "absolute";
opt5.style.top = "59%";
opt5.style.left = "24%";
opt5.innerHTML = "Halifax";
opt5.style.fontSize= "30px";
opt5.style.color = "black";
opt5.style.fontFamily = "sans-serif";
opt5.style.fontWeight = "bolder";
opt5.style.paddingTop= "10px";
opt5.style.paddingBottom= "10px";
opt5.style.paddingLeft= "300px";
opt5.style.paddingRight= "390px";
opt5.style.borderRadius = "10px";
opt5.style.backgroundColor = "#FFE5CC";
opt5.addEventListener("mouseover",function(){
  opt5.style.backgroundColor = "red";
})
  opt5.addEventListener("mouseout",function(){
    opt5.style.backgroundColor = "#FFE5CC";
})
opt5.style.cursor = "pointer"
opt5.addEventListener("click",function(){
  window.location.href = "Halifax.html"
})

// Shipley Link 
let opt6 = document.getElementById("option6");
opt6.style.position = "absolute";
opt6.style.top = "69%";
opt6.style.left = "24%";
opt6.innerHTML = "Shipley";
opt6.style.fontSize= "30px";
opt6.style.color = "black";
opt6.style.fontFamily = "sans-serif";
opt6.style.fontWeight = "bolder";
opt6.style.paddingTop= "10px";
opt6.style.paddingBottom= "10px";
opt6.style.paddingLeft= "300px";
opt6.style.paddingRight= "390px";
opt6.style.borderRadius = "10px";
opt6.style.backgroundColor = "#FFE5CC";
opt6.addEventListener("mouseover",function(){
  opt6.style.backgroundColor = "red";
})
  opt6.addEventListener("mouseout",function(){
    opt6.style.backgroundColor = "#FFE5CC";
})
opt6.style.cursor = "pointer"
opt6.addEventListener("click",function(){
  window.location.href = "shipley.html"
})

let background = document.getElementById("first")
background.style.backgroundColor = "beige";
background.style.position = "absolute";
background.style.top = "0%";
background.style.width = "100%";
background.style.height = "100%";

// citations option 
let citations = document.getElementById("citations");
citations.style.position= "absolute";
citations.style.top= "1%";
citations.style.left= "90%";
citations.style.fontSize= "30px";
citations.style.color= "black";
citations.innerHTML= "Citations";
citations.addEventListener("click", function(){
  window.location.href="CitationsPage.html"
})
  citations.style.cursor="pointer";
citations.style.fontWeight= "bolder";
citations.addEventListener("mouseover", function(){
  citations.style.color = "red"
})
  citations.addEventListener("mouseout", function(){
    citations.style.color = "black"
})


let home1 = document.getElementById("Home")
home1.style.position = "absolute"
home1.innerHTML = "Home"
home1.style.top = "0.1%"
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
home1.style.fontWeight = "bolder"