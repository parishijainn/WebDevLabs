function greetingFunc(){
    var d = new Date()
    var h = d.getHours()
    var greeting;
    
    if (h < 12){
        console.log("Good morning!");
        greeting = "Good morning";
    } else if (h < 18){
        console.log("Good afternoon!");
        greeting = "Good afternoon";
    } else if (h < 20){
        console.log("Good evening!");
        greeting = "Good evening";
    } else if (h < 24 || h < 5){
        console.log("Good night!");
        greeting = "Good night";
    }

    var E = document.getElementById("greeting")
    E.innerHTML = greeting + ", I am Parishi Jain!";
}


function addYear() {
    var date = new Date();
    var year = date.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML += " " + year;
}

// function showList(){
//     document.getElementById("funlist").style.display = "block";
//     document.getElementById("clickme").style.display = "none";
// }

$(document).ready(function() {
    $("#longBio").hide();

    $("#readMoreButton").click(function() {
        if ($("#longBio").is(":visible")){
            $("#longBio").hide();
            $("#readMoreButton").text("Read More...");
        } else {
            $("#longBio").show();
            $("#readMoreButton").text("Read Less");
        }  
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const commentInput = document.getElementById("comment");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const commentError = document.getElementById("commentError");

        const validationMessage = document.getElementById("validationMessage");

        function showError(input, errorElement) {
            if (!input.validity.valid) {
                errorElement.textContent = input.validationMessage;
                errorElement.style.display = "block";
            } else {
                errorElement.textContent = "";
                errorElement.style.display = "none";
            }
        }

        function validateForm() { 
            validationMessage.innerHTML = ""; 
            validationMessage.className = ""; 

            if (!nameInput.value) {
                nameInput.setCustomValidity("Don't forget to enter your name!");
            } else {
                nameInput.setCustomValidity("");
            }

            if (!emailInput.value) {
                emailInput.setCustomValidity("Don't forget to enter your email!");
            } else {
                emailInput.setCustomValidity("");
            }

            if (!commentInput.value) {
                commentInput.setCustomValidity("Don't forget to enter your comment!");
            } else {
                commentInput.setCustomValidity("");
            }

            showError(nameInput, nameError);
            showError(emailInput, emailError);
            showError(commentInput, commentError);

            if (!nameInput.checkValidity() || !emailInput.checkValidity() || !commentInput.checkValidity()) {
                validationMessage.innerHTML = "Please fill out the form correctly so I can get back to you :)";
                validationMessage.className = "error-message";
                return false;
            }

            validationMessage.innerHTML = "You have submitted the form successfully! Thank you for reaching out!";
            validationMessage.className = "success";
            return false; 
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            validateForm();
        });
    }
});

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            return response.json();
        })
        .then(data => {
            const advice = data.slip.advice;
            document.getElementById("adviceText").innerText = advice;
        })
        .catch(error => {
            document.getElementById("adviceText").innerText = "Sorry, we couldn't get the advice. Please try again later.";
            console.error("Error:", error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const navLinks = document.querySelector(".nav-links");

    hamburgerIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

window.onload = function() {
    var currentLocation = window.location.pathname; 
    var links = document.querySelectorAll('.nav-links a'); 

    links.forEach(function(link) {
        if (link.href.includes(currentLocation)) {
            link.classList.add('active'); 
        }
    });
};
