import { username, password, confirmPassword, setUpEye, setUpConfirmEye } from "./authenticationPageJava.js";

//----Creating DOM Variable Objects----//
const registerForm = document.getElementById("registerForm");
const registerBtn = document.getElementById("registerBtn");
//Personal Details Variables//
const forename = document.getElementById("forenameTxt");
const surname = document.getElementById("surnameTxt");
const email = document.getElementById("emailTxt");
const phone = document.getElementById("phoneTxt");
const birthday = document.getElementById("birthdayDT");
const gender = document.getElementById("genderDD");
const ethnicity = document.getElementById("ethnicityDD");
//Regex//
const regexPhoneNumber = /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/;
const regexCheckPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

var scrollToError = true; //Variable ensures that the page scrolls to the top-most error of the sign-up form//

registerBtn.addEventListener("click", (event) => {
	//Ensures that validation of the register form's fields is completed before submitting data to the local host server
	event.preventDefault();
	console.log("Form Submitted");
	validateRegisterForm();
});

//Event handlers ensures that validation is completed upon Tab press
registerForm.addEventListener("keydown", (e) => {
	console.log("tab pressed");
	if (e.key === "Tab") {
		validateRegisterForm();
	}
});

setDate();
setUpEye();
setUpConfirmEye();

//Function to set the max date on birthdayDT to today's date
function setDate() {
	let today = new Date(); //Creates new date object with today's date and time
	let dd = today.getDate(); //Sets the variable dd to today's day
	let mm = today.getMonth() + 1; //Sets the variable mm to the current month. Note* January is 0 by default and that is why we add+1!
	const yyyy = today.getFullYear(); //Sets the variable yyyy to the current year

	if (dd < 10) {
		//If statements adds a 0 in front of any day under 10 to ensure a proper date format e.g. 01/01/2023
		dd = "0" + dd;
	}

	if (mm < 10) {
		//If statements adds a 0 in front of any month under 10 to ensure a proper date format e.g. 10/09/2023
		mm = "0" + mm;
	}

	today = yyyy + "-" + mm + "-" + dd; //The variable today is set to a yyyy/mm/dd format so that it is compatible with the HTML date field

	birthday.setAttribute("max", today); //Sets the max date for the birthdayDT field to today's date
}

//Validate register form upon submit button click
function validateRegisterForm() {
	scrollToError = true;
	console.log("hello");
	//Account Details Statements//
	if (username.value === "" || username.value == null) {
		ErrorMessage("usernameTxt", "You must create a username for your account!");
		return false;
	} else if (username.value.length < 6) {
		//If username field is shorter than 6 characters, show error
		ErrorMessage("usernameTxt", "Your username cannot be sorter than 6 characters!");
		return false;
	} else if (username.value.length > 20) {
		//If username field is longer than 20 characters, show error
		ErrorMessage("usernameTxt", "Your username cannot be longer than 20 characters!");
		return false;
	} else {
		ErrorMessage("usernameTxt", ""), SuccessMessage("usernameTxt");
	}

	if (password.value === "" || password.value == null) {
		ErrorMessage("passwordTxt", "You must create a password for your account!");
		return false;
	} else if (password.value.length < 6) {
		//If password field is shorter than 6 characters, show error
		ErrorMessage("passwordTxt", "Your password cannot be sorter than 6 characters!");
		return false;
	} else if (password.value.length > 20) {
		//If password field is longer than 20 characters, show error
		ErrorMessage("passwordTxt", "Your password cannot be longer than 20 characters!");
		return false;
	} else if (!regexCheckPassword.test(password.value)) {
		//Checks that the password contains uppercase, lowercase, number, special character
		ErrorMessage("passwordTxt", "Your password must contain at least one uppercase, lowercase, number and special character!");
		return false;
	} else if (confirmPassword.value != password.value) {
		//Checks that password and confirm password match
		ErrorMessage("passwordTxt", ""), SuccessMessage("passwordTxt");
		ErrorMessage("confirmPasswordTxt", "Password and Confirm Password must match!", (document.getElementById("passwordTxt").style.border = "1px solid red"));
		return false;
	} else {
		ErrorMessage("confirmPasswordTxt", ""), SuccessMessage("confirmPasswordTxt"), ErrorMessage("passwordTxt", ""), SuccessMessage("passwordTxt");
	}

	//Personal Details Statements//
	if (forename.value === "" || forename.value == null) {
		//if username field is empty or null, show error message
		ErrorMessage("forenameTxt", "You must enter your forename!");
		return false;
	} else {
		ErrorMessage("forenameTxt", ""), SuccessMessage("forenameTxt");
	} //else remove error message and invoke SuccessMessage() function

	if (surname.value === "" || surname.value == null) {
		ErrorMessage("surnameTxt", "You must enter your surname!");
		return false;
	} else {
		ErrorMessage("surnameTxt", ""), SuccessMessage("surnameTxt");
	}

	if (email.value === "" || email.value == null) {
		ErrorMessage("emailTxt", "You must enter your email address!");
		return false;
	} else {
		ErrorMessage("emailTxt", ""), SuccessMessage("emailTxt");
	}

	if (phone.value === "" || phone.value == null) {
		ErrorMessage("phoneTxt", "You must enter your phone number!");
		return false;
	} else if (!regexPhoneNumber.test(phone.value)) {
		//if phone field isn't in a proper UK phone number format, show error
		ErrorMessage("phoneTxt", "This is not a valid UK phone number! (Examples- 07513 438167, +44 7513 438167, +44 (0) 7513438167)");
		return false;
	} else {
		ErrorMessage("phoneTxt", ""), SuccessMessage("phoneTxt");
	}

	if (birthday.value === "" || birthday.value == null) {
		ErrorMessage("birthdayDT", "You must select your date of birth!");
		return false;
	}
	// else if (CalculateAge() < 18) {
	// 	//Invoke the CalculateAge() function to make sure the user is 18 or over, if not show error
	// 	ErrorMessage("birthdayDT", "You must be at least 18 to book a test!");
	// 	return false;
	//	}
	else {
		ErrorMessage("birthdayDT", ""), SuccessMessage("birthdayDT");
	}

	if (gender.value == "Select your gender...") {
		ErrorMessage("genderDD", "You must select your gender!");
		return false;
	} else {
		ErrorMessage("genderDD", ""), SuccessMessage("genderDD");
	}

	if (ethnicity.value == "Select your ethnicity...") {
		ErrorMessage("ethnicityDD", "You must select your ethnicity!");
		return false;
	} else {
		ErrorMessage("ethnicityDD", ""), SuccessMessage("ethnicityDD");
	}

	return true;
}

function ErrorMessage(el, message) {
	//Function used to display error message under the appropriate fields and colour them red
	const element = document.getElementById(el + "Error");
	element.innerText = message;
	element.style.borderStyle = "Red";
	document.getElementById(el).style.border = "1px solid red";

	if (scrollToError == true && message != "") {
		//Scrolls the web page to the top-most error smoothly
		document.getElementById(el).scrollIntoView({ behavior: "smooth" });
		scrollToError = false;
	}
}

function SuccessMessage(el) {
	//Function used to color fields in green if they pass validation
	document.getElementById(el).style.border = "1px solid LawnGreen";
}
