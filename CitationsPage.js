
let title = document.getElementById("title");
title.style.position= "absolute";
title.style.top= "1%";
title.style.left= "44%";
title.style.fontSize= "30px";
title.style.color= "black";
title.innerHTML= "Citations";

// Nav section 
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

// Home page link 
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

// Citations 
let paragraph = document.createElement("p");
paragraph.style.position= "absolute"
paragraph.style.top= "20%"
paragraph.style.left= "10%"
paragraph.style.fontSize= "20px"
paragraph.style.color= "black"
paragraph.innerHTML= `Robbie Moore (MP). (2024, February 23). Wikipedia. https://en.wikipedia.org/wiki/Robbie_Moore_(MP)#:~:text=Robert%20Peter%20Moore%20(born%2028<br><br><br>
  ‌
  Imran Hussain (British politician). (2024, April 6). Wikipedia. https://en.wikipedia.org/wiki/Imran_Hussain_(British_politician)<br><br><br>
  ‌
  Judith Cummins. (2023, August 14). Wikipedia. https://en.wikipedia.org/wiki/Judith_Cummins<br><br><br>
  ‌
  Wikipedia Contributors. (2024, February 14). Naz Shah. Wikipedia; Wikimedia Foundation. https://en.wikipedia.org/wiki/Naz_Shah<br><br><br>
  ‌
  Wikipedia. (2024). Holly Lynch. [online] Available at: https://en.wikipedia.org/wiki/Holly_Lynch [Accessed 25 Apr. 2024].<br><br><br>
  ‌
  Philip Davies. (2024, April 23). Wikipedia. https://en.wikipedia.org/wiki/Philip_Davies#:~:text=Sir%20Philip%20Andrew%20Davies%20(born`
document.body.appendChild(paragraph);