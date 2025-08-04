const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./Images/logo1.jpg") {
    myImage.setAttribute("src", "./Images/logo2.jpg");
  } else {
    myImage.setAttribute("src", "./Images/logo1.jpg");
  }
});
// Welcome Message
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to Margalla Skills Develoment Academy!, ${myName}`;
  }
}
//initialization
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to Margalla Skills Develoment Academy!, ${storedName}`;
}
//EO initialization
myButton.addEventListener("click", () => {
  setUserName();
});

