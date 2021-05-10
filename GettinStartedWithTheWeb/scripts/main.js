let miImagen = document.querySelector("img");
miImagen.onclick = function () {
    let miSrc = miImagen.getAttribute("src");
    if (miSrc === "images/800px-Coat_of_arms_of_Argentina.svg.png") {
        miImagen.setAttribute("src", "images/1920px-Flag_of_Argentina.svg.png");
    } else {
        miImagen.setAttribute("src", "images/800px-Coat_of_arms_of_Argentina.svg.png");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "Mozilla is cool, " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};
