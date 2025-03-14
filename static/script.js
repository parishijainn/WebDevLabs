var x, y, z;
x = 5;
y = 7;
z = x+y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A+B;
console.log(C);

function sumNPrint(x1, x2){
    let x3 = x1 + x2;
    console.log(x3);
}

sumNPrint(x, y);
sumNPrint(A, B);

if (C.length > z){
    console.log(C);
} else if (C.length < z){
    console.log(z);
} else{
    console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(array){
//     for (let i = 0; i < array.length; i++){
//         if (arr[i] == "Banana"){
//             alert("found the Banana in" + i);
//         }
//     }
// }

function findTheBanana(array, arrayName) {
    array.forEach(function(currentValue, index, arr) {
        if (currentValue == "Banana") {
        alert("We found a Banana in the" + arrayName + " array");
        }
    });
}

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
    document.getElementById("greeting").innerHTML = greeting + ", I am Parishi Jain!";
}

if (window.location.href.includes("index.html")){
    greetingFunc();
}
