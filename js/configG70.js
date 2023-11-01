

const openModalButton1 = document.getElementById("openModalButton1");
const openModalButton2 = document.getElementById("openModalButton2");
    const MODALsum = document.getElementById("MODAL");
    const closeModalButton = document.getElementById("closeModalButton");

    openModalButton1.addEventListener("click", function () {
      MODALsum.style.display = "block";
    });
    openModalButton2.addEventListener("click", function () {
      MODALsum.style.display = "block";
    });

    closeModalButton.addEventListener("click", function () {
      MODALsum.style.display = "none";
    });

    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.addEventListener("change", function () {
        updateSummary();
      });
    });

    function updateSummary() {
      let engineamount = 0;
      let exterioramount = 0;
      let interioramount = 0;
let car =0;
      document.querySelectorAll('input[name="engineoptionradio"]').forEach((radio) => {
        if (radio.checked) {
          const engineOption = radio.value;
          if (engineOption === "740i M Sport") {
            car = 17800000;
            engineamount = 0;
          } 
          // else if (engineOption === "X3 xDrive M40i") {
          //   engineamount = 1920000;
          //   car = 8770000;
          // } else if (engineOption === "X3 xDrive20d M Sport") {
          //   engineamount = 340000;
          //    car= 7190000;
          // }
          document.getElementById("car_variant").textContent = `:   ${engineOption}`;
        }
      });

      document.querySelectorAll('input[name="exterioroptionradio"]').forEach((radio) => {
        if (radio.checked) {
          const exteriorOption = radio.value;
          document.getElementById("car_exterior_color").textContent = `: ${exteriorOption}`;
          if (exteriorOption === "color 2") {
            exterioramount = 10000;
          }
        }
      });

      document.querySelectorAll('input[name="interioroptionradio"]').forEach((radio) => {
        if (radio.checked) {
          const interiorOption = radio.value;
          document.getElementById("car_interior_color").textContent = `: ${interiorOption}`;
          if (interiorOption === "interior 2") {
            interioramount = 10000;
          }
        }
      });

      const chargeamount = engineamount + exterioramount + interioramount;
      const caramount = 17800000 + chargeamount;

      document.getElementById("engineamount").textContent = `₹${car.toLocaleString()}`;
      document.getElementById("exterioramount").textContent = `₹${exterioramount.toLocaleString()}`;
      document.getElementById("interioramount").textContent =` ₹${interioramount.toLocaleString()}`;
      document.getElementById("car_additional_charges").textContent =`₹${chargeamount.toLocaleString()}`;
      document.getElementById("car_Amount").textContent = `₹${caramount.toLocaleString()}`;
    }
const icon = document.querySelector('#icon');
const tooltip = document.querySelector('.tooltip');

icon.addEventListener('mouseover', function () {
    tooltip.style.visibility = 'visible';
});

icon.addEventListener('mouseout', function () {
    tooltip.style.visibility = 'hidden';
});

const icon1 = document.querySelector('#icon1');
const tooltip1 = document.querySelector('.tooltip1');

icon1.addEventListener('mouseover', function () {
    tooltip1.style.visibility = 'visible';
});

icon1.addEventListener('mouseout', function () {
    tooltip1.style.visibility = 'hidden';
});

function scrollToDivengine() {
    let engine_container = document.querySelector(".engine_container");
    let offset = 100; // Set the desired offset (in pixels) from the top
    let scrollToY =
      engine_container.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  }

  function scrollToDivexterior() {
    let Exterior_container = document.querySelector(".Exterior_container");
    let offset = 100; // Set the desired offset (in pixels) from the top
    let scrollToY =
      Exterior_container.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  }
  function scrollToDivinterior() {
    let Interior_container = document.querySelector(".Interior_container");
    let offset = 100; // Set the desired offset (in pixels) from the top
    let scrollToY =
      Interior_container.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  }

  document
    .getElementById("senddatabutton")
    .addEventListener("click", function () {
      // Data to be sent
      const dataToSend = {
        selectedOption: "The BMW 7",
      };

      // Convert the data to a query string
      const queryString = Object.keys(dataToSend)
        .map((key) => key + "=" + dataToSend[key])
        .join("&");

      // Navigate to the second page with the data as query parameters
      window.location.href = "/html/testdrive.html?" + queryString;
    });

  //        *****************************modal********************************
  // Get references to the modal and trigger image
  const modal = document.querySelector(".modal");
  const triggerImage1 = document.getElementById("360view");
  const triggerImage2 = document.querySelector(".exteriorview");
  const closeButton = document.querySelector("#mybutton");
  const overlay = document.getElementById("overlay");

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
    overlay.style.display = "block";
  }
  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
  // Event listeners to open and close the modal
  triggerImage1.addEventListener("click", openModal);
  triggerImage2.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);

  // **********************************************************************************
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".exteriorbuttonoption");
    buttons[0].classList.add("active");
    // Function to handle the "active" class for buttons
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove the "active" class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));
        // Add the "active" class to the clicked button
        this.classList.add("active");
      });
    });
  });
  // **********************************************************************************
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".interiorbuttonoption");
    buttons[0].classList.add("active");

    // Function to handle the "active" class for buttons
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove the "active" class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));
        // Add the "active" class to the clicked button
        this.classList.add("active");
      });
    });
  });

  // *************************
  const modalen = document.querySelector("#modalen");
  const triggerImageen = document.querySelector(".en");
  const closeButtonen = document.querySelector(".close-button");
  const overlayen = document.querySelector("#overlayen");

  // Function to open the modal
  function openModalen() {
    modalen.style.display = "block";
    overlayen.style.display = "block";
  }

  // Function to close the modal
  function closeModalen() {
    overlayen.style.display = "none";
    modalen.style.display = "none";
  }

  // Event listeners to open and close the modal
  triggerImageen.addEventListener("click", openModalen);
  closeButtonen.addEventListener("click", closeModalen);

  // ************************************slideshow*************
  let slideIndex1 = 0;
  let timer1; // Declare a variable for the timer
  let paused1 = false; // Variable to track if the slideshow is paused
  let slideIndex2 = 0;
  let timer2; // Declare a variable for the timer
  let paused2 = false; // Variable to track if the slideshow is paused
  let slideIndex3 = 0;
  let timer3; // Declare a variable for the timer
  let paused3 = false; // Variable to track if the slideshow is paused
  let slideIndex4 = 0;
  let timer4; // Declare a variable for the timer
  let paused4 = false; // Variable to track if the slideshow is paused

  function showSlides1() {
    let i;
    const slides1 = document.getElementsByClassName("mySlides1");

    for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {
      slideIndex1 = 1;
    }
    slides1[slideIndex1 - 1].style.display = "block";
    timer1 = setTimeout(showSlides1, 1500); // Store the timer
  }

  function showSlides2() {
    let i;
    const slides2 = document.getElementsByClassName("mySlides2");

    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {
      slideIndex2 = 1;
    }
    slides2[slideIndex2 - 1].style.display = "block";
    timer2 = setTimeout(showSlides2, 1500); // Store the timer
  }
  function showSlides3() {
    let i;
    const slides3 = document.getElementsByClassName("mySlides3");

    for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
    }
    slideIndex3++;
    if (slideIndex3 > slides3.length) {
      slideIndex3 = 1;
    }
    slides3[slideIndex3 - 1].style.display = "block";
    timer3 = setTimeout(showSlides3, 1500); // Store the timer
  }
  function showSlides4() {
    let i;
    const slides4 = document.getElementsByClassName("mySlides4");

    for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
    }
    slideIndex4++;
    if (slideIndex4 > slides4.length) {
      slideIndex4 = 1;
    }
    slides4[slideIndex4 - 1].style.display = "block";
    timer4 = setTimeout(showSlides4, 1500); // Store the timer
  }
  // Function to stop animations
  function stopAnimations1() {
    clearTimeout(timer1); // Clear the timer to pause the slideshow
    paused1 = true; // Set the paused flag to true
  }

  // Function to start the slideshow from the paused index
  function startSlideshow1() {
    if (!paused1) return; // If not paused, do nothing
    paused1 = false; // Reset the paused flag
    showSlides1(); // Start the slideshow
  }
  // Function to stop animations
  function stopAnimations2() {
    clearTimeout(timer2); // Clear the timer to pause the slideshow
    paused2 = true; // Set the paused flag to true
  }

  // Function to start the slideshow from the paused index
  function startSlideshow2() {
    if (!paused2) return; // If not paused, do nothing
    paused2 = false; // Reset the paused flag
    showSlides2(); // Start the slideshow
  }
  // Function to stop animations
  function stopAnimations3() {
    clearTimeout(timer3); // Clear the timer to pause the slideshow
    paused3 = true; // Set the paused flag to true
  }

  // Function to start the slideshow from the paused index
  function startSlideshow3() {
    if (!paused3) return; // If not paused, do nothing
    paused3 = false; // Reset the paused flag
    showSlides3(); // Start the slideshow
  }
  // Function to stop animations
  function stopAnimations4() {
    clearTimeout(timer4); // Clear the timer to pause the slideshow
    paused4 = true; // Set the paused flag to true
  }

  // Function to start the slideshow from the paused index
  function startSlideshow4() {
    if (!paused4) return; // If not paused, do nothing
    paused4 = false; // Reset the paused flag
    showSlides4(); // Start the slideshow
  }

  const clickableImages1 = document.querySelectorAll(".clickable-image1");
  clickableImages1.forEach((image) => {
    image.addEventListener("click", () => {
      if (paused1) {
        startSlideshow1();
      } else {
        stopAnimations1();
      }
    });
  });

  const clickableImages2 = document.querySelectorAll(".clickable-image2");
  clickableImages2.forEach((image) => {
    image.addEventListener("click", () => {
      if (paused2) {
        startSlideshow2();
      } else {
        stopAnimations2();
      }
    });
  });
  
  const clickableImages3 = document.querySelectorAll(".clickable-image3");
  clickableImages3.forEach((image) => {
    image.addEventListener("click", () => {
      if (paused3) {
        startSlideshow3();
      } else {
        stopAnimations3();
      }
    });
  });
  const clickableImages4 = document.querySelectorAll(".clickable-image4");
  clickableImages4.forEach((image) => {
    image.addEventListener("click", () => {
      if (paused4) {
        startSlideshow4();
      } else {
        stopAnimations4();
      }
    });
  });

  // Start the slideshow
  showSlides1();
  showSlides2();
  showSlides3();
  showSlides4();

  let color1 = document.querySelector(".slideshow-container1");
  let color2 = document.querySelector(".slideshow-container2");
  // color1.style.display = "none";
  color2.style.display = "none";
  function showcolor2() {
    color1.style.display = "none";
    color2.style.display = "block";
  }
  function showcolor1() {
    color1.style.display = "block";
    color2.style.display = "none";
  }
  let color3 = document.querySelector(".slideshow-container3");
  let color4 = document.querySelector(".slideshow-container4");
  color4.style.display = "none";
  // color1.style.display = "none";
  color2.style.display = "none";
  function showcolor3() {
    color3.style.display = "none";
    color4.style.display = "block";
  }
  function showcolor4() {
    color3.style.display = "block";
    color4.style.display = "none";
  }

  const form = document.getElementById('orderform');
  const placed=document.querySelector("#booking");

  placed.addEventListener('click', function() {
    event.preventDefault(); // Prevent the form from submitting
    
    const inputValue1 = document.getElementById('firstname').value;
  const inputValue2 = document.getElementById('secondname').value;
  const inputValue3 = document.getElementById('mobile').value;
  const inputValue4 = document.getElementById('address').value;
  const inputValue5 = document.getElementById('email').value;
  const inputValue6 = document.getElementById('inputState').value;
  const inputValue7 = document.getElementById('inputDistrict').value;
        if(inputValue1 && inputValue2 && inputValue3 && inputValue4 && inputValue5 && inputValue6 && inputValue7)
        placed.textContent = 'Order Placed';
      else 
      {
        alert("first fill the info");
      }
    });
       // *******************************price calculation********************
  const radioButtons1 = document.querySelectorAll(
    'input[name="engineoptionradio"]'
  );
  const radioButtons2 = document.querySelectorAll(
    'input[name="exterioroptionradio"]'
  );
  const radioButtons3 = document.querySelectorAll(
    'input[name="interioroptionradio"]'
  );
  const output = document.getElementById("output");
  const outputprice = document.getElementById("outputprice");
  const enginenamechanger = document.getElementById("enginename");
  const enginenamechanger1 = document.querySelector(".enginename1");
  const engine1 = document.querySelector("#engine1");
  // const engine2 = document.querySelector("#engine2");
  // const engine3 = document.querySelector("#engine3");
  let amount = 17800000;
  let engineamount = 0;
  let exterioramount = 0;
  let interioramount = 0;
  let enginename;

  // engine2.style.display = "none";
  // engine3.style.display = "none";

  // Attach change event listeners to the radio buttons for price calculation
  radioButtons1.forEach((radioButton) => {
    radioButton.addEventListener("change", updatePrice);
  });

  radioButtons2.forEach((radioButton) => {
    radioButton.addEventListener("change", updatePrice);
  });

  radioButtons3.forEach((radioButton) => {
    radioButton.addEventListener("change", updatePrice);
  });


  function updatePrice() {
    let amount = 17800000;

    // Calculate the engine, exterior, and interior prices based on selected options
    radioButtons1.forEach((radioButton) => {
      if (radioButton.checked) {
        // if (radioButton.value === "X3 xDrive M40i") {
        //   engine1.style.display = "none";
        //   engine2.style.display = "block";
        //   engine3.style.display = "none";
        //   enginename = "X3 xDrive M40i";
        //   engineamount = 1920000;
        // } else if (radioButton.value === "X3 xDrive20d M Sport") {
        //   engine1.style.display = "none";
        //   engine2.style.display = "none";
        //   engine3.style.display = "block";
        //   enginename = "X3 xDrive20d M Sport";
        //   engineamount = 340000;
        // } else
         if (radioButton.value === "740i M Sport") {
          engine1.style.display = "block";
          // engine2.style.display = "none";
          // engine3.style.display = "none";
          enginename = "740i M Sport";
          engineamount = 0;
        }
      }
    });

    radioButtons2.forEach((radioButton) => {
      if (radioButton.checked) {
        if (radioButton.value === "color 1") {
          exterioramount = 0;
        } else if (radioButton.value === "color 2") {
          exterioramount = 10000;
        }
        // Add more conditions for other exterior options if needed
      }
    });

    radioButtons3.forEach((radioButton) => {
      if (radioButton.checked) {
        if (radioButton.value === "interior 1") {
          interioramount = 0;
        } else if (radioButton.value === "interior 2") {
          interioramount = 10000;
        }

        // Add more conditions for other interior options if needed
      }
    });

    // Calculate the total amount
    amount = amount + engineamount + exterioramount + interioramount;

    // Update the output element with the total price
    output.textContent =`₹${amount.toLocaleString()}`;
    outputprice.textContent = `₹${amount.toLocaleString()}`;
    enginenamechanger.textContent =`${enginename.toLocaleString()}`;
    enginenamechanger1.textContent = `${enginename.toLocaleString()}`;
  }

  // ************************************slider***********
  const opensliderbutton = document.querySelector(".opensliderbutton");
  const infoformslider = document.getElementById("infoformslider");
  const closesliderbutton = document.getElementById("closesliderbutton");

  opensliderbutton.addEventListener("click", () => {
    infoformslider.style.right = "0";
  });

  closesliderbutton.addEventListener("click", () => {
    infoformslider.style.right = "-1550px";
  });

  // Close the formslider if the user clicks outside the formslider
  window.addEventListener("click", (event) => {
    if (event.target === infoformslider) {
      infoformslider.style.right = "-1550px";
    }
  });

  // Prevent clicking inside the formslider from closing it
  infoformslider.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // *************************active**************************
  // ****************active *********************

  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".navbar_buttons");
    buttons[0].classList.add("active");
    // Function to handle the "active" class for buttons
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove the "active" class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));

        // Add the "active" class to the clicked button
        this.classList.add("active");

        setTimeout(function () {
          button.classList.remove("active");
        }, 3500);
      });
    });
  });

  var AndraPradesh = [
    "Anantapur",
    "Chittoor",
    "East Godavari",
    "Guntur",
    "Kadapa",
    "Krishna",
    "Kurnool",
    "Prakasam",
    "Nellore",
    "Srikakulam",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
  ];
  var ArunachalPradesh = [
    "Anjaw",
    "Changlang",
    "Dibang Valley",
    "East Kameng",
    "East Siang",
    "Kra Daadi",
    "Kurung Kumey",
    "Lohit",
    "Longding",
    "Lower Dibang Valley",
    "Lower Subansiri",
    "Namsai",
    "Papum Pare",
    "Siang",
    "Tawang",
    "Tirap",
    "Upper Siang",
    "Upper Subansiri",
    "West Kameng",
    "West Siang",
    "Itanagar",
  ];
  var Assam = [
    "Baksa",
    "Barpeta",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Hojai",
    "Jorhat",
    "Kamrup Metropolitan",
    "Kamrup (Rural)",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Dima Hasao",
    "Sivasagar",
    "Sonitpur",
    "South Salmara Mankachar",
    "Tinsukia",
    "Udalguri",
    "West Karbi Anglong",
  ];
  var Bihar = [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran",
  ];
  var Chhattisgarh = [
    "Balod",
    "Baloda Bazar",
    "Balrampur",
    "Bastar",
    "Bemetara",
    "Bijapur",
    "Bilaspur",
    "Dantewada",
    "Dhamtari",
    "Durg",
    "Gariaband",
    "Janjgir Champa",
    "Jashpur",
    "Kabirdham",
    "Kanker",
    "Kondagaon",
    "Korba",
    "Koriya",
    "Mahasamund",
    "Mungeli",
    "Narayanpur",
    "Raigarh",
    "Raipur",
    "Rajnandgaon",
    "Sukma",
    "Surajpur",
    "Surguja",
  ];
  var Goa = ["North Goa", "South Goa"];
  var Gujarat = [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Aravalli",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhota Udaipur",
    "Dahod",
    "Dang",
    "Devbhoomi Dwarka",
    "Gandhinagar",
    "Gir Somnath",
    "Jamnagar",
    "Junagadh",
    "Kheda",
    "Kutch",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surat",
    "Surendranagar",
    "Tapi",
    "Vadodara",
    "Valsad",
  ];
  var Haryana = [
    "Ambala",
    "Bhiwani",
    "Charkhi Dadri",
    "Faridabad",
    "Fatehabad",
    "Gurugram",
    "Hisar",
    "Jhajjar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Mahendragarh",
    "Mewat",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamunanagar",
  ];
  var HimachalPradesh = [
    "Bilaspur",
    "Chamba",
    "Hamirpur",
    "Kangra",
    "Kinnaur",
    "Kullu",
    "Lahaul Spiti",
    "Mandi",
    "Shimla",
    "Sirmaur",
    "Solan",
    "Una",
  ];
  var JammuKashmir = [
    "Anantnag",
    "Bandipora",
    "Baramulla",
    "Budgam",
    "Doda",
    "Ganderbal",
    "Jammu",
    "Kargil",
    "Kathua",
    "Kishtwar",
    "Kulgam",
    "Kupwara",
    "Leh",
    "Poonch",
    "Pulwama",
    "Rajouri",
    "Ramban",
    "Reasi",
    "Samba",
    "Shopian",
    "Srinagar",
    "Udhampur",
  ];
  var Jharkhand = [
    "Bokaro",
    "Chatra",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "East Singhbhum",
    "Garhwa",
    "Giridih",
    "Godda",
    "Gumla",
    "Hazaribagh",
    "Jamtara",
    "Khunti",
    "Koderma",
    "Latehar",
    "Lohardaga",
    "Pakur",
    "Palamu",
    "Ramgarh",
    "Ranchi",
    "Sahebganj",
    "Seraikela Kharsawan",
    "Simdega",
    "West Singhbhum",
  ];
  var Karnataka = [
    "Bagalkot",
    "Bangalore Rural",
    "Bangalore Urban",
    "Belgaum",
    "Bellary",
    "Bidar",
    "Vijayapura",
    "Chamarajanagar",
    "Chikkaballapur",
    "Chikkamagaluru",
    "Chitradurga",
    "Dakshina Kannada",
    "Davanagere",
    "Dharwad",
    "Gadag",
    "Gulbarga",
    "Hassan",
    "Haveri",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysore",
    "Raichur",
    "Ramanagara",
    "Shimoga",
    "Tumkur",
    "Udupi",
    "Uttara Kannada",
    "Yadgir",
  ];
  var Kerala = [
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad",
  ];
  var MadhyaPradesh = [
    "Agar Malwa",
    "Alirajpur",
    "Anuppur",
    "Ashoknagar",
    "Balaghat",
    "Barwani",
    "Betul",
    "Bhind",
    "Bhopal",
    "Burhanpur",
    "Chhatarpur",
    "Chhindwara",
    "Damoh",
    "Datia",
    "Dewas",
    "Dhar",
    "Dindori",
    "Guna",
    "Gwalior",
    "Harda",
    "Hoshangabad",
    "Indore",
    "Jabalpur",
    "Jhabua",
    "Katni",
    "Khandwa",
    "Khargone",
    "Mandla",
    "Mandsaur",
    "Morena",
    "Narsinghpur",
    "Neemuch",
    "Panna",
    "Raisen",
    "Rajgarh",
    "Ratlam",
    "Rewa",
    "Sagar",
    "Satna",
    "Sehore",
    "Seoni",
    "Shahdol",
    "Shajapur",
    "Sheopur",
    "Shivpuri",
    "Sidhi",
    "Singrauli",
    "Tikamgarh",
    "Ujjain",
    "Umaria",
    "Vidisha",
  ];
  var Maharashtra = [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal",
  ];
  var Manipur = [
    "Bishnupur",
    "Chandel",
    "Churachandpur",
    "Imphal East",
    "Imphal West",
    "Jiribam",
    "Kakching",
    "Kamjong",
    "Kangpokpi",
    "Noney",
    "Pherzawl",
    "Senapati",
    "Tamenglong",
    "Tengnoupal",
    "Thoubal",
    "Ukhrul",
  ];
  var Meghalaya = [
    "East Garo Hills",
    "East Jaintia Hills",
    "East Khasi Hills",
    "North Garo Hills",
    "Ri Bhoi",
    "South Garo Hills",
    "South West Garo Hills",
    "South West Khasi Hills",
    "West Garo Hills",
    "West Jaintia Hills",
    "West Khasi Hills",
  ];
  var Mizoram = [
    "Aizawl",
    "Champhai",
    "Kolasib",
    "Lawngtlai",
    "Lunglei",
    "Mamit",
    "Saiha",
    "Serchhip",
    "Aizawl",
    "Champhai",
    "Kolasib",
    "Lawngtlai",
    "Lunglei",
    "Mamit",
    "Saiha",
    "Serchhip",
  ];
  var Nagaland = [
    "Dimapur",
    "Kiphire",
    "Kohima",
    "Longleng",
    "Mokokchung",
    "Mon",
    "Peren",
    "Phek",
    "Tuensang",
    "Wokha",
    "Zunheboto",
  ];
  var Odisha = [
    "Angul",
    "Balangir",
    "Balasore",
    "Bargarh",
    "Bhadrak",
    "Boudh",
    "Cuttack",
    "Debagarh",
    "Dhenkanal",
    "Gajapati",
    "Ganjam",
    "Jagatsinghpur",
    "Jajpur",
    "Jharsuguda",
    "Kalahandi",
    "Kandhamal",
    "Kendrapara",
    "Kendujhar",
    "Khordha",
    "Koraput",
    "Malkangiri",
    "Mayurbhanj",
    "Nabarangpur",
    "Nayagarh",
    "Nuapada",
    "Puri",
    "Rayagada",
    "Sambalpur",
    "Subarnapur",
    "Sundergarh",
  ];
  var Punjab = [
    "Amritsar",
    "Barnala",
    "Bathinda",
    "Faridkot",
    "Fatehgarh Sahib",
    "Fazilka",
    "Firozpur",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Kapurthala",
    "Ludhiana",
    "Mansa",
    "Moga",
    "Mohali",
    "Muktsar",
    "Pathankot",
    "Patiala",
    "Rupnagar",
    "Sangrur",
    "Shaheed Bhagat Singh Nagar",
    "Tarn Taran",
  ];
  var Rajasthan = [
    "Ajmer",
    "Alwar",
    "Banswara",
    "Baran",
    "Barmer",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittorgarh",
    "Churu",
    "Dausa",
    "Dholpur",
    "Dungarpur",
    "Ganganagar",
    "Hanumangarh",
    "Jaipur",
    "Jaisalmer",
    "Jalore",
    "Jhalawar",
    "Jhunjhunu",
    "Jodhpur",
    "Karauli",
    "Kota",
    "Nagaur",
    "Pali",
    "Pratapgarh",
    "Rajsamand",
    "Sawai Madhopur",
    "Sikar",
    "Sirohi",
    "Tonk",
    "Udaipur",
  ];
  var Sikkim = [
    "East Sikkim",
    "North Sikkim",
    "South Sikkim",
    "West Sikkim",
  ];
  var TamilNadu = [
    "Ariyalur",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Salem",
    "Sivaganga",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];
  var Telangana = [
    "Adilabad",
    "Bhadradri Kothagudem",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Jayashankar",
    "Jogulamba",
    "Kamareddy",
    "Karimnagar",
    "Khammam",
    "Komaram Bheem",
    "Mahabubabad",
    "Mahbubnagar",
    "Mancherial",
    "Medak",
    "Medchal",
    "Nagarkurnool",
    "Nalgonda",
    "Nirmal",
    "Nizamabad",
    "Peddapalli",
    "Rajanna Sircilla",
    "Ranga Reddy",
    "Sangareddy",
    "Siddipet",
    "Suryapet",
    "Vikarabad",
    "Wanaparthy",
    "Warangal Rural",
    "Warangal Urban",
    "Yadadri Bhuvanagiri",
  ];
  var Tripura = [
    "Dhalai",
    "Gomati",
    "Khowai",
    "North Tripura",
    "Sepahijala",
    "South Tripura",
    "Unakoti",
    "West Tripura",
  ];
  var UttarPradesh = [
    "Agra",
    "Aligarh",
    "Allahabad",
    "Ambedkar Nagar",
    "Amethi",
    "Amroha",
    "Auraiya",
    "Azamgarh",
    "Baghpat",
    "Bahraich",
    "Ballia",
    "Balrampur",
    "Banda",
    "Barabanki",
    "Bareilly",
    "Basti",
    "Bhadohi",
    "Bijnor",
    "Budaun",
    "Bulandshahr",
    "Chandauli",
    "Chitrakoot",
    "Deoria",
    "Etah",
    "Etawah",
    "Faizabad",
    "Farrukhabad",
    "Fatehpur",
    "Firozabad",
    "Gautam Buddha Nagar",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Gorakhpur",
    "Hamirpur",
    "Hapur",
    "Hardoi",
    "Hathras",
    "Jalaun",
    "Jaunpur",
    "Jhansi",
    "Kannauj",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Kasganj",
    "Kaushambi",
    "Kheri",
    "Kushinagar",
    "Lalitpur",
    "Lucknow",
    "Maharajganj",
    "Mahoba",
    "Mainpuri",
    "Mathura",
    "Mau",
    "Meerut",
    "Mirzapur",
    "Moradabad",
    "Muzaffarnagar",
    "Pilibhit",
    "Pratapgarh",
    "Raebareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Sant Kabir Nagar",
    "Shahjahanpur",
    "Shamli",
    "Shravasti",
    "Siddharthnagar",
    "Sitapur",
    "Sonbhadra",
    "Sultanpur",
    "Unnao",
    "Varanasi",
  ];
  var Uttarakhand = [
    "Almora",
    "Bageshwar",
    "Chamoli",
    "Champawat",
    "Dehradun",
    "Haridwar",
    "Nainital",
    "Pauri",
    "Pithoragarh",
    "Rudraprayag",
    "Tehri",
    "Udham Singh Nagar",
    "Uttarkashi",
  ];
  var WestBengal = [
    "Alipurduar",
    "Bankura",
    "Birbhum",
    "Cooch Behar",
    "Dakshin Dinajpur",
    "Darjeeling",
    "Hooghly",
    "Howrah",
    "Jalpaiguri",
    "Jhargram",
    "Kalimpong",
    "Kolkata",
    "Malda",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "Paschim Bardhaman",
    "Paschim Medinipur",
    "Purba Bardhaman",
    "Purba Medinipur",
    "Purulia",
    "South 24 Parganas",
    "Uttar Dinajpur",
  ];
  var AndamanNicobar = ["Nicobar", "North Middle Andaman", "South Andaman"];
  var Chandigarh = ["Chandigarh"];
  var DadraHaveli = ["Dadra Nagar Haveli"];
  var DamanDiu = ["Daman", "Diu"];
  var Delhi = [
    "Central Delhi",
    "East Delhi",
    "New Delhi",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "Shahdara",
    "South Delhi",
    "South East Delhi",
    "South West Delhi",
    "West Delhi",
  ];
  var Lakshadweep = ["Lakshadweep"];
  var Puducherry = ["Karaikal", "Mahe", "Puducherry", "Yanam"];

  $("#inputState").change(function () {
    var StateSelected = $(this).val();
    var optionsList;
    var selectElement = $("#inputDistrict");
    var htmlString = "";

    switch (StateSelected) {
      case "Andra Pradesh":
        optionsList = AndraPradesh;
        break;
      case "Arunachal Pradesh":
        optionsList = ArunachalPradesh;
        break;
      case "Assam":
        optionsList = Assam;
        break;
      case "Bihar":
        optionsList = Bihar;
        break;
      case "Chhattisgarh":
        optionsList = Chhattisgarh;
        break;
      case "Goa":
        optionsList = Goa;
        break;
      case "Gujarat":
        optionsList = Gujarat;
        break;
      case "Haryana":
        optionsList = Haryana;
        break;
      case "Himachal Pradesh":
        optionsList = HimachalPradesh;
        break;
      case "Jammu and Kashmir":
        optionsList = JammuKashmir;
        break;
      case "Jharkhand":
        optionsList = Jharkhand;
        break;
      case "Karnataka":
        optionsList = Karnataka;
        break;
      case "Kerala":
        optionsList = Kerala;
        break;
      case "Madya Pradesh":
        optionsList = MadhyaPradesh;
        break;
      case "Maharashtra":
        optionsList = Maharashtra;
        break;
      case "Manipur":
        optionsList = Manipur;
        break;
      case "Meghalaya":
        optionsList = Meghalaya;
        break;
      case "Mizoram":
        optionsList = Mizoram;
        break;
      case "Nagaland":
        optionsList = Nagaland;
        break;
      case "Orissa":
        optionsList = Orissa;
        break;
      case "Punjab":
        optionsList = Punjab;
        break;
      case "Rajasthan":
        optionsList = Rajasthan;
        break;
      case "Sikkim":
        optionsList = Sikkim;
        break;
      case "Tamil Nadu":
        optionsList = TamilNadu;
        break;
      case "Telangana":
        optionsList = Telangana;
        break;
      case "Tripura":
        optionsList = Tripura;
        break;
      case "Uttaranchal":
        optionsList = Uttaranchal;
        break;
      case "Uttar Pradesh":
        optionsList = UttarPradesh;
        break;
      case "West Bengal":
        optionsList = WestBengal;
        break;
      case "Andaman and Nicobar Islands":
        optionsList = AndamanNicobar;
        break;
      case "Chandigarh":
        optionsList = Chandigarh;
        break;
      case "Dadar and Nagar Haveli":
        optionsList = DadraHaveli;
        break;
      case "Daman and Diu":
        optionsList = DamanDiu;
        break;
      case "Delhi":
        optionsList = Delhi;
        break;
      case "Lakshadeep":
        optionsList = Lakshadeep;
        break;
    }
    if (optionsList) {
for (var i = 0; i < optionsList.length; i++) {
  selectElement.append($("<option>", {
    value: optionsList[i],
    text: optionsList[i]
  }));
}
}
  });