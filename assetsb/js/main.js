popp = document.getElementById("sign");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 2400) {
    popp.className = "signup show"
  } else {
    popp.className = "signup hide"
  }
};

window.addEventListener("scroll", myScrollFunc);

function closePop() {
  document.getElementById("sign").style.display="none";
}

function bookNow() {        
  let book  = document.getElementById("trash");
  let bkn = document.createElement('div')
  bkn.innerHTML = `<div id="trash"><button onclick="document.getElementById('id01').style.display='block'">Book Now</button>

  <div id="id01" class="modal">
    <form class="bookingForm" action="/action_page.php">
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" required>

      <label for="name"><b>Name</b></label>
      <input type="text" placeholder="Name" name="name" id="name" required>

      <label for="service"><b>Service</b></label>
      <select name="service" class="services" id="services" required>
        <option value="0">Please select</option>
        <option data-area="rental" value="200">Adult haircut</option>
        <option data-area="rental" value="300">Adult haircut and beard</option> 
        <option data-area="rental" value="150">Children haircut</option>
        <option data-area="rental" value="500">Hair Coloring</option>
        <option data-area="rental" value="500">Hair Texturizing</option>
        <option data-area="rental" value="3000">Dread Making</option>
        <option data-area="rental" value="2000">Dread Maintenance</option>
      </select>

      <label for="service"><b>Add Another Service</b></label>
      <select name="service" class="services" id="services" required>
        <option value="0">Please select</option>
        <option data-area="rental" value="200">Adult haircut</option>
        <option data-area="rental" value="300">Adult haircut and beard</option> 
        <option data-area="rental" value="150">Children haircut</option>
        <option data-area="rental" value="500">Hair Coloring</option>
        <option data-area="rental" value="500">Texturizing</option>
        <option data-area="rental" value="3000">Dread Making</option>
        <option data-area="rental" value="2000">Dread Maintenance</option>
      </select>
      <label for="email"><b>Date</b></label>
      <input type="date" name="date" id="date" required>

      <label for="name"><b>Time</b></label>
      <input type="time"  name="time" id="time" required>
       <input  class="book" type="submit" onclick="bookingMessage()" placeholder="Book"  disabled>
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="deletebtn">Delete</button>
    </form>
  </div></div> `
  book.append(bkn)         
}
const bookingMessage = () => {
  
}
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
  


  var Ind = 1;
  showSlides(Ind);
  

  function plusSlides(n) {
    showSlides(Ind += n);
  }
  function currentSlide(n) {
    showSlides(Ind = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("products");
    if (n > slides.length) {Ind = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[Ind-1].style.display = "flex";
  }
  

window.onscroll = function() {
  myFunction()
};
function myFunction() {
  if (document.documentElement.scrollTop == 10) {
    document.getElementById("body").className = "sticky-header";
  } else {
    document.getElementById("body").className="block";
  }
}


  var slideIndx = 1;
  showSldes(slideIndx);
  function plusSldes(n) {
    showSldes(slideIndx += n);
  }
  function currntSlide(n) {
    showSldes(slideIndx = n);
  }
  
  function showSldes(n) {
    var i;
    var sldes = document.getElementsByClassName("picture");
    if (n > sldes.length) {slideIndx = 1}
    if (n < 1) {slideIndx = sldes.length}
    for (i = 0; i < sldes.length; i++) {
      sldes[i].style.display = "none";
    }
    sldes[slideIndx-1].style.display = "flex";
  }
  var slideIndex = 0;
  showSlides();
 

  function menuBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nv") {
      x.className += " responsive";
    } else {
      x.className = "nv";
    }
  }

