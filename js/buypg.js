$(function () {
  $("a").each(function () {
    if ($(this).prop("href") == window.location.href) {
      $(this).addClass("active");
      $(this).parents("li").addClass("active");
    }
  });
});

let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};
let series1 = document.getElementById("series1");
let series2 = document.getElementById("series2");
let series3 = document.getElementById("series3");
let series4 = document.getElementById("series4");
let series5 = document.getElementById("series5");

function showModel1() {
  series1.style.display = "block";
  series2.style.display = "none";
  series3.style.display = "none";
  series4.style.display = "none";
  series5.style.display = "none";
}
function showModel2() {
  series1.style.display = "none";
  series2.style.display = "block";
  series3.style.display = "none";
  series4.style.display = "none";
  series5.style.display = "none";
}

function showModel3() {
  series1.style.display = "none";
  series2.style.display = "none";
  series3.style.display = "block";
  series4.style.display = "none";
  series5.style.display = "none";
}

function showModel4() {
  series1.style.display = "none";
  series2.style.display = "none";
  series3.style.display = "none";
  series4.style.display = "block";
  series5.style.display = "none";
}

function showModel5() {
  series1.style.display = "none";
  series2.style.display = "none";
  series3.style.display = "none";
  series4.style.display = "none";
  series5.style.display = "block";
}
function show() {
  series1.style.display = "block";
  series2.style.display = "block";
  series3.style.display = "block";
  series4.style.display = "block";
  series5.style.display = "block";
}
// Get references to the modal and trigger image

// Get references to the modal and trigger image

// function X1()
const modal1 = document.querySelector("#modal1");
const triggerImage1 = document.getElementById("X1");
const closeButton1 = document.querySelector("#close-button1");
// triggerImage.style.display="none" ;
// Function to open the modal
function openModal1() {
  to_hide_rest_of_modal();
  modal1.style.display = "block";
}
// Function to close the modal
function closeModal1() {
  modal1.style.display = "none";
}
// Event listeners to open and close the modal
triggerImage1.addEventListener("click", openModal1);
closeButton1.addEventListener("click", closeModal1);

//funtion X3()
const modal2 = document.querySelector("#modal2");
const triggerImage2 = document.getElementById("X3");
const closeButton2 = document.querySelector("#close-button2");
// Function to open the modal
function openModal2() {
  to_hide_rest_of_modal();
  modal2.style.display = "block";
}
// Function to close the modal
function closeModal2() {
  modal2.style.display = "none";
}
// Event listeners to open and close the modal
triggerImage2.addEventListener("click", openModal2);
closeButton2.addEventListener("click", closeModal2);

//funtion x5()
const modal3 = document.querySelector("#modal3");
const triggerImage3 = document.getElementById("X5");
const closeButton3 = document.querySelector("#close-button3");
// Function to open the modal
function openModal3() {
  to_hide_rest_of_modal();
  modal3.style.display = "block";
}
// Function to close the modal
function closeModal3() {
  modal3.style.display = "none";
}
// Event listeners to open and close the modal
triggerImage3.addEventListener("click", openModal3);
closeButton3.addEventListener("click", closeModal3);

//funtion X7()
const modal4 = document.querySelector("#modal4");
const triggerImage4 = document.getElementById("X7");
const closeButton4 = document.querySelector("#close-button4");
// Function to open the modal
function openModal4() {
  to_hide_rest_of_modal();
  modal4.style.display = "block";
}
// Function to close the modal
function closeModal4() {
  modal4.style.display = "none";
}
// Event listeners to open and close the modal
triggerImage4.addEventListener("click", openModal4);
closeButton4.addEventListener("click", closeModal4);

//funtion M2
const modal5 = document.querySelector("#modal5");
const triggerImage5 = document.getElementById("M2");
const closeButton5 = document.querySelector("#close-button5");
// Function to open the modal
function openModal5() {
  to_hide_rest_of_modal();
  modal5.style.display = "block";
}
// Function to close the modal
function closeModal5() {
  modal5.style.display = "none";
}
// Event listeners to open and close the modal
triggerImage5.addEventListener("click", openModal5);
closeButton5.addEventListener("click", closeModal5);

//funtion M4()
const modal6 = document.querySelector("#modal6");
const triggerImage6 = document.getElementById("M4");
const closeButton6 = document.querySelector("#close-button6");
// Function to open the modal
function openModal6() {
  to_hide_rest_of_modal();
  modal6.style.display = "block";
}
// Function to close the modal
function closeModal6() {
  modal6.style.display = "none";
}
// Event listeners to open and close the modal
triggerImage6.addEventListener("click", openModal6);
closeButton6.addEventListener("click", closeModal6);

//funtion M8()
const modal7 = document.querySelector("#modal7");
const triggerImage7 = document.getElementById("M8");
const closeButton7 = document.querySelector("#close-button7");
// Function to open the modal
function openModal7() {
  to_hide_rest_of_modal();
  modal7.style.display = "block";
}
// Function to close the modal
function closeModal7() {
  modal7.style.display = "none";
}
// Event listeners to open and close the modal
triggerImage7.addEventListener("click", openModal7);
closeButton7.addEventListener("click", closeModal7);

//funtion i4()
const modal8 = document.querySelector("#modal8");
const triggerImage8 = document.getElementById("i4");
const closeButton8 = document.querySelector("#close-button8");
// Function to open the modal
function openModal8() {
  to_hide_rest_of_modal();
  modal8.style.display = "block";
}
// Function to close the modal
function closeModal8() {
  modal8.style.display = "none";
}
// Event listeners to open and close the modal
triggerImage8.addEventListener("click", openModal8);
closeButton8.addEventListener("click", closeModal8);
//funtion i7()
const modal9 = document.querySelector("#modal9");
const triggerImage9 = document.getElementById("i7");
const closeButton9 = document.querySelector("#close-button9");
// Function to open the modal
function openModal9() {
  to_hide_rest_of_modal();
  modal9.style.display = "block";
}
// Function to close the modal
function closeModal9() {
  modal9.style.display = "none";
}
// Event listeners to open and close the modal
triggerImage9.addEventListener("click", openModal9);
closeButton9.addEventListener("click", closeModal9);
//funtion ix()
const modal10 = document.querySelector("#modal10");
const triggerImage10 = document.getElementById("ix");
const closeButton10 = document.querySelector("#close-button10");
// Function to open the modal
function openModal10() {
  to_hide_rest_of_modal();
  modal10.style.display = "block";
}
// Function to close the modal
function closeModal10() {
  modal10.style.display = "none";
}
// Event listeners to open and close the modal
triggerImage10.addEventListener("click", openModal10);
closeButton10.addEventListener("click", closeModal10);
//funtion 220d()
const modal11 = document.querySelector("#modal11");
const triggerImage11 = document.getElementById("220d");
const closeButton11 = document.querySelector("#close-button11");
// Function to open the modal
function openModal11() {
  to_hide_rest_of_modal();

  modal11.style.display = "block";
}
// Function to close the modal
function closeModal11() {
  modal11.style.display = "none";
}
// Event listeners to open and close the modal
triggerImage11.addEventListener("click", openModal11);
closeButton11.addEventListener("click", closeModal11);
//funtion 740Li()
const modal12 = document.querySelector("#modal12");
const triggerImage12 = document.getElementById("740Li");
const closeButton12 = document.querySelector("#close-button12");
// Function to open the modal
function openModal12() {
  to_hide_rest_of_modal();
  modal12.style.display = "block";
}
// Function to close the modal
function closeModal12() {
  modal12.style.display = "none";
}
// Event listeners to open and close the modal
triggerImage12.addEventListener("click", openModal12);
closeButton12.addEventListener("click", closeModal12);

function to_hide_rest_of_modal() {
  var modals = document.querySelectorAll(".modal"); // Assuming you have modals with the class "modal"

  for (var i = 0; i < modals.length; i++) {
    modals[i].style.display = "none"; // Hide the modal if it's not the specified one
  }
  return;
}
