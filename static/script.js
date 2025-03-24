// var x, y, z;
// x = 5;
// y = 7;
// z = x+y;
// console.log(z);

// var A = "Hello ";
// var B = "world!";
// var C = A+B;
// console.log(C);

// function sumNPrint(x1, x2){
//     let x3 = x1 + x2;
//     console.log(x3);
// }

// sumNPrint(x, y);
// sumNPrint(A, B);

// if (C.length > z){
//     console.log(C);
// } else if (C.length < z){
//     console.log(z);
// } else{
//     console.log("good job!");
// }

// var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(array){
//     for (let i = 0; i < array.length; i++){
//         if (arr[i] == "Banana"){
//             alert("found the Banana in" + i);
//         }
//     }
// }

// function findTheBanana(array, arrayName) {
//     array.forEach(function(currentValue, index, arr) {
//         if (currentValue == "Banana") {
//         alert("We found a Banana in the " + arrayName + " array");
//         }
//     });
// }

// findTheBanana(L1, "first");
// findTheBanana(L2, "second");

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