
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

// Labour Image 
let labour = document.getElementById("labour")
labour.style.position= "absolute"
labour.style.top= "100px"
labour.style.left= "50px"
labour.style.width= "200px"
labour.style.height= "250px"
labour.style.borderRadius= "50px"
labour.style.border= "2px solid black"

// Labour Twitter Link 
let labourtwitter = document.createElement("a")
labourtwitter.style.position= "absolute"
labourtwitter.style.top= "450px"
labourtwitter.style.left= "80px"
labourtwitter.style.fontSize= "20px"
labourtwitter.style.color= "black"
labourtwitter.innerHTML= "@labour-Twitter"
labourtwitter.href= "https://twitter.com/uklabour?lang=en"
labourtwitter.style.cursor="pointer";
labourtwitter.addEventListener("mouseover", function(){
  labourtwitter.style.color="red";
})
labourtwitter.addEventListener("mouseout", function(){
  labourtwitter.style.color="black";
})
document.body.appendChild(labourtwitter)

// Labour Facebook Link 
let labourfacebook = document.createElement("a")
labourfacebook.style.position= "absolute"
labourfacebook.style.top= "480px"
labourfacebook.style.left= "80px"
labourfacebook.style.fontSize= "20px"
labourfacebook.style.color= "black"
labourfacebook.innerHTML= "@labour-Facebook"
labourfacebook.href= "https://www.facebook.com/labourparty/?locale=en_GB"
labourfacebook.style.cursor="pointer";
labourfacebook.addEventListener("mouseover", function(){
  labourfacebook.style.color="red";
})
labourfacebook.addEventListener("mouseout", function(){
  labourfacebook.style.color="black";
})
document.body.appendChild(labourfacebook)

// Labour Website Link 
let labourwebsite = document.createElement("a")
labourwebsite.style.position= "absolute"
labourwebsite.style.top= "510px"
labourwebsite.style.left= "80px"
labourwebsite.style.fontSize= "20px"
labourwebsite.style.color= "black"
labourwebsite.innerHTML= "Labour-Website"
labourwebsite.href= "https://www.labour.org.uk/"
labourwebsite.style.cursor="pointer";
labourwebsite.addEventListener("mouseover", function(){
  labourwebsite.style.color="red";
})
labourwebsite.addEventListener("mouseout", function(){
  labourwebsite.style.color="black";
})
document.body.appendChild(labourwebsite)


let conservative = document.getElementById("conservative")
conservative.style.position= "absolute"
conservative.style.top= "100px"
conservative.style.left= "450px"
conservative.style.width= "200px"
conservative.style.height= "250px"
conservative.style.borderRadius= "50px"
conservative.style.border= "2px solid black" 

// Conservative Website Link 
let conservativeWebsite = document.createElement("a")
conservativeWebsite.style.position= "absolute"
conservativeWebsite.style.top= "510px"
conservativeWebsite.style.left= "480px"
conservativeWebsite.style.fontSize= "20px"
conservativeWebsite.style.color= "black"
conservativeWebsite.innerHTML= "Conservative-Website"
conservativeWebsite.href= "https://www.conservatives.com/"
conservativeWebsite.style.cursor="pointer";
conservativeWebsite.addEventListener("mouseover", function(){
  conservativeWebsite.style.color="red";
})
conservativeWebsite.addEventListener("mouseout", function(){
  conservativeWebsite.style.color="black";
})
document.body.appendChild(conservativeWebsite)

// Conservative Twitter Link 
let conservativetwitter = document.createElement("a")
conservativetwitter.style.position= "absolute"
conservativetwitter.style.top= "450px"
conservativetwitter.style.left= "480px"
conservativetwitter.style.fontSize= "20px"
conservativetwitter.style.color= "black"
conservativetwitter.innerHTML= "@conservative-Twitter"
conservativetwitter.href= "https://twitter.com/conservatives?lang=en"
conservativetwitter.style.cursor="pointer";
conservativetwitter.addEventListener("mouseover", function(){
  conservativetwitter.style.color="red";
})
conservativetwitter.addEventListener("mouseout", function(){
  conservativetwitter.style.color="black";
})
document.body.appendChild(conservativetwitter)

// Conservative Facebook Link 
let conservativefacebook = document.createElement("a")
conservativefacebook.style.position= "absolute"
conservativefacebook.style.top= "480px"
conservativefacebook.style.left= "480px"
conservativefacebook.style.fontSize= "20px"
conservativefacebook.style.color= "black"
conservativefacebook.innerHTML= "@conservative-Facebook"
conservativefacebook.href= "https://www.facebook.com/Conservatives/"
conservativefacebook.style.cursor="pointer";
conservativefacebook.addEventListener("mouseover", function(){
  conservativefacebook.style.color="red";
})
conservativefacebook.addEventListener("mouseout", function(){
  conservativefacebook.style.color="black";
})
document.body.appendChild(conservativefacebook)


let green = document.getElementById("green")
green.style.position= "absolute"
green.style.top= "100px"
green.style.left= "850px"
green.style.width= "200px"
green.style.height= "250px"
green.style.borderRadius= "50px"
green.style.border= "2px solid black"

// Green Twitter Link 
let greentwitter = document.createElement("a")
greentwitter.style.position= "absolute"
greentwitter.style.top= "450px"
greentwitter.style.left= "880px"
greentwitter.style.fontSize= "20px"
greentwitter.style.color= "black"
greentwitter.innerHTML= "@green-Twitter"
greentwitter.href= "https://twitter.com/greenparty?lang=en"
greentwitter.style.cursor="pointer";
greentwitter.addEventListener("mouseover", function(){
  greentwitter.style.color="red";
})
greentwitter.addEventListener("mouseout", function(){
  greentwitter.style.color="black";
})
document.body.appendChild(greentwitter)

// Green Facebook Link 
let greenfacebook = document.createElement("a")
greenfacebook.style.position= "absolute"
greenfacebook.style.top= "480px"
greenfacebook.style.left= "880px"
greenfacebook.style.fontSize= "20px"
greenfacebook.style.color= "black"
greenfacebook.innerHTML= "@green-Facebook"
greenfacebook.href= "https://www.facebook.com/GreenParty/"
greenfacebook.style.cursor="pointer";
greenfacebook.addEventListener("mouseover", function(){
  greenfacebook.style.color="red";
})
greenfacebook.addEventListener("mouseout", function(){
  greenfacebook.style.color="black";
})
document.body.appendChild(greenfacebook)

// Green Party Website Link 
let greenwebsite = document.createElement("a")
greenwebsite.style.position= "absolute"
greenwebsite.style.top= "510px"
greenwebsite.style.left= "880px"
greenwebsite.style.fontSize= "20px"
greenwebsite.style.color= "black"
greenwebsite.innerHTML= "Green-Website"
greenwebsite.href= "https://www.greenparty.org.uk/"
greenwebsite.style.cursor="pointer";
greenwebsite.addEventListener("mouseover", function(){
  greenwebsite.style.color="red";
})
greenwebsite.addEventListener("mouseout", function(){
  greenwebsite.style.color="black";
})
document.body.appendChild(greenwebsite)

let reform = document.getElementById("reform")
reform.style.position= "absolute"
reform.style.top= "100px"
reform.style.left= "1250px"
reform.style.width= "200px"
reform.style.height= "250px"
reform.style.borderRadius= "50px"
reform.style.border= "2px solid black"

// Refrom Twitter Link 
let reformtwitter = document.createElement("a")
reformtwitter.style.position= "absolute"
reformtwitter.style.top= "450px"
reformtwitter.style.left= "1280px"
reformtwitter.style.fontSize= "20px"
reformtwitter.style.color= "black"
reformtwitter.innerHTML= "@reform-Twitter"
reformtwitter.href= "https://twitter.com/reformparty_uk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
reformtwitter.style.cursor="pointer";
reformtwitter.addEventListener("mouseover", function(){
  reformtwitter.style.color="red";
})
reformtwitter.addEventListener("mouseout", function(){
  reformtwitter.style.color="black";
})
document.body.appendChild(reformtwitter)

// Reform Facebook Link 
let reformfacebook = document.createElement("a")
reformfacebook.style.position= "absolute"
reformfacebook.style.top= "480px"
reformfacebook.style.left= "1280px"
reformfacebook.style.fontSize= "20px"
reformfacebook.style.color= "black"
reformfacebook.innerHTML= "@reform-Facebook"
reformfacebook.href= "https://www.facebook.com/thegreenparty/?locale=en_GB"
reformfacebook.style.cursor="pointer";
reformfacebook.addEventListener("mouseover", function(){
  reformfacebook.style.color="red";
})
reformfacebook.addEventListener("mouseout", function(){
  reformfacebook.style.color="black";
})
document.body.appendChild(reformfacebook)

// Reform Website Link 
let reformwebsite = document.createElement("a")
reformwebsite.style.position= "absolute"
reformwebsite.style.top= "510px"
reformwebsite.style.left= "1280px"
reformwebsite.style.fontSize= "20px"
reformwebsite.style.color= "black"
reformwebsite.innerHTML= "Reform-Website"
reformwebsite.href= "https://www.reformparty.uk/"
reformwebsite.style.cursor="pointer";
reformwebsite.addEventListener("mouseover", function(){
  reformwebsite.style.color="red";
})
reformwebsite.addEventListener("mouseout", function(){
  reformwebsite.style.color="black";
})
document.body.appendChild(reformwebsite)


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
