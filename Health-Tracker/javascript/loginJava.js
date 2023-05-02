import { username, password, setUpEye } from "./authenticationPageJava.js";

//----Creating DOM Variable Objects----//
const loginBtn = document.getElementById("loginBtn");

setUpEye();

loginBtn.addEventListener("click", (event) => {
	event.preventDefault();
	console.log("Form Submitted");
});
