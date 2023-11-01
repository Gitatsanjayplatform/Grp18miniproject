// JavaScript code here
// JavaScript code here

const form = document.getElementById("myForm");
const submitButton = document.getElementById("submitBtn");
const closeModalButton = document.querySelector(".close-button");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("mymodal");
const userDetails = document.getElementById("userDetails");

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get form values
  const title = document.querySelector(".title").value;
  const firstName = document.querySelector(".firstname").value;
  const lastName = document.querySelector(".lastname").value;
  const email = document.querySelector(".email").value;
  const mobile = document.querySelector(".mobile").value;
  const prefferedModel = document.querySelector(".prefferedmodel").value;
  // const interestedInFinance =
  //   document.querySelectorAll(".conditions input")[0].checked;
  const acceptDataUsageAgreement =
    document.querySelectorAll(".conditions input")[0].checked;

  // Create an object with user details
  const userDetailsObj = {
    Title: title,
    "First Name": firstName,
    "Last Name": lastName,
    Email: email,
    Mobile: mobile,
    "Preferred Model": prefferedModel,
    // "Interested in Finance": interestedInFinance ? "Yes" : "No",
    "Accept Data Usage Agreement": acceptDataUsageAgreement ? "Yes" : "No",
  };

  // Display user details in the modal
  userDetails.innerHTML = "";

  for (const key in userDetailsObj) {
    const detail = userDetailsObj[key];
    userDetails.innerHTML += `<p><strong>${key}:</strong> ${detail}</p><br>`;
  }
  if (title && firstName && lastName && mobile && email && prefferedModel) {
    if (acceptDataUsageAgreement) {
      overlay.style.display = "block";
      modal.style.display = "block";
    } else {
      alert("Accept data usage agreement.");
    }
  } else {
    alert(" First fill the info .");
  }
});

closeModalButton.addEventListener("click", () => {
  overlay.style.display = "none";
  modal.style.display = "none";
});

// *******************************data transfer********************************
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const queryParams = {};
  for (const [key, value] of params.entries()) {
    queryParams[key] = value;
  }
  return queryParams;
}

// Get the query parameters from the URL
const queryParams = getQueryParams();

// Access the data passed from the first page
const selectedOption = queryParams.selectedOption;

const selectElement = document.getElementsByClassName("prefferedmodel");
// Use the data to pre-select an option in the select element
if (selectedOption) {
  selectElement[0].value = selectedOption;
}
