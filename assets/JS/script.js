'use strict';

// Function to toggle the "active" class on elements
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// Sidebar functionality
const sidebar = document.querySelector("[data-sidebar]"); // Select the sidebar element
const sidebarBtn = document.querySelector("[data-sidebar-btn]"); // Select the button to toggle sidebar

// Toggle sidebar visibility on button click (for mobile)
sidebarBtn.addEventListener("click", function () { 
  elementToggleFunc(sidebar); 
});

// Testimonials functionality
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]"); // Select all testimonial items

const testserviceItem = document.querySelectorAll("[data-testservice-item]"); // Select all testimonial items


const modalContainer = document.querySelector("[data-modal-container]"); // Modal container for the testimonials
const modalCloseBtn = document.querySelector("[data-modal-close-btn]"); // Close button for the modal
const overlay = document.querySelector("[data-overlay]"); // Overlay element behind the modal

// Variables for modal content
const modalImg = document.querySelector("[data-modal-img]"); // Image in the modal
const modalTitle = document.querySelector("[data-modal-title]"); // Title in the modal
const modalText = document.querySelector("[data-modal-text]"); // Text in the modal

// Function to toggle the modal visibility
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active"); // Toggle modal visibility
  overlay.classList.toggle("active"); // Toggle overlay visibility
}

// Adding click event to all testimonial items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    // Set modal content based on the clicked testimonial item
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc(); // Show the modal
  });
}

// Add click event to close button and overlay to close the modal
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select functionality
const select = document.querySelector("[data-select]"); // Select dropdown element
const selectItems = document.querySelectorAll("[data-select-item]"); // Select options
const selectValue = document.querySelector("[data-selecct-value]"); // Displayed value of the select
const filterBtn = document.querySelectorAll("[data-filter-btn]"); // Filter buttons

// Toggle the select dropdown on click
select.addEventListener("click", function () { 
  elementToggleFunc(this); 
});

// Adding click event to all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase(); // Get the selected value
    selectValue.innerText = this.innerText; // Update the displayed value
    elementToggleFunc(select); // Close the dropdown
    filterFunc(selectedValue); // Call filter function with the selected value
  });
}

// Filter functionality
const filterItems = document.querySelectorAll("[data-filter-item]"); // Items to filter

// Function to filter items based on selected value
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    // Check if the selected value matches the category of the item
    if (selectedValue === "all") {
      filterItems[i].classList.add("active"); // Show all items
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active"); // Show matching item
    } else {
      filterItems[i].classList.remove("active"); // Hide non-matching item
    }
  }
}

// Adding event to all filter button items for large screen
let lastClickedBtn = filterBtn[0]; // Store the last clicked button

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase(); // Get selected value from button
    selectValue.innerText = this.innerText; // Update displayed value
    filterFunc(selectedValue); // Call filter function

    lastClickedBtn.classList.remove("active"); // Remove active class from last clicked button
    this.classList.add("active"); // Add active class to the current button
    lastClickedBtn = this; // Update last clicked button
  });
}

// Contact form functionality
const form = document.querySelector("[data-form]"); // Select the form element
const formInputs = document.querySelectorAll("[data-form-input]"); // Select all input fields
const formBtn = document.querySelector("[data-form-btn]"); // Submit button for the form

// Add event to all form input fields
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // Check if the form is valid
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled"); // Enable button if valid
    } else {
      formBtn.setAttribute("disabled", ""); // Disable button if not valid
    }
  });
}

// Page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]"); // Navigation links
const pages = document.querySelectorAll("[data-page]"); // Page sections

// Add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active"); // Show the matching page
        navigationLinks[i].classList.add("active"); // Highlight the matching link
        window.scrollTo(0, 0); // Scroll to top
      } else {
        pages[i].classList.remove("active"); // Hide non-matching page
        navigationLinks[i].classList.remove("active"); // Remove highlight from non-matching link
      }
    }
  });
}



  function sendEmail() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    var subject = "Contact Form Submission";
    var body = "Full Name: " + fullname + "\nEmail: " + email + "\nMessage: " + message;

    // Create the mailto link with the form data
    var mailtoLink = "mailto:contact.mr.anouar@gmail.com?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(body);

    // Open the default email client with the pre-filled form data
    window.location.href = mailtoLink;
  }
