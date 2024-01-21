window.onload = function () {
  const burger_btn = document.querySelector('.burger');
  const mobile_menu =document.querySelector('.mobile-menu');
  burger_btn.addEventListener('click', function () {
  
    burger_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  })

  function closeMenu(){
    const burgerLinks = document.querySelectorAll(".mobile-menu li");
    burgerLinks.forEach(link => link.addEventListener("click", ()=>{
      burger_btn.classList.remove("is-active");
      mobile_menu.classList.remove("is-active");
    }));
  }closeMenu()
}

// function changeBar() {
//   document.querySelector("burger").classList.toggle("is-active");
//   document.querySelector("burgerLinks").classList.toggle("links");
//   document.querySelector("burgerLinksBg").classList.toggle("change-bg");

// }c



function scrollDown() {
  $(window).scroll(function() {
    if ($(this).scrollTop()>250)
    {
        $('.scrollDown').hide(800);
    }
    else
    {
      $('.scrollDown').show(800);
    }
  });
}scrollDown()


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal();
let hoverDiv = document.getElementById("Hover");
let volunteerText=document.querySelectorAll(".voluntering div");
for (let i=0;i<volunteerText.length; i++) {
  volunteerText[i].onmouseenter= function() {
    this.classList.toggle("show");
    hoverDiv.style.display="none";
  }
}


// function movingDiv() {
//   let skillDIv = 0;
//   skillDIv += 25
//   document.getElementById("movingDiv").style.left = skillDIv + "px";
// }movingDiv()

 
function todayDay() {
  const weekday = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
  const today = new Date();
   let day = weekday[today.getDay()];
  document.getElementById("todaysDay").innerHTML= day;

}todayDay()

setInterval(complimentDay, 3000);
function complimentDay() {
  const counter = 0;
  const fineCompliments = ["fantastic","fullfilled", "wonderful", "blessed","splendid", "great", "lovely"];
  const complimentsText =document.getElementById("compliments");
  i = Math.floor(Math.random() * fineCompliments.length);
  complimentsText.innerHTML = fineCompliments[i];
  
}

function scrollUp() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 800) {    
        $('.scrollUp').fadeIn(200);    
    } else {
        $('.scrollUp').fadeOut(200);   
    }
  });
  $('.scrollUp').click(function() {     
      $('body,html').animate({
          scrollTop : 0                      
      }, 500);
  });
}scrollUp()

