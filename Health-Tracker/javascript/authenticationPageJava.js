//----File containing java code used across login and register pages----//

//----Creating DOM Variable Objects----//
export const username = document.getElementById("usernameTxt");
export const password = document.getElementById("passwordTxt");
export const confirmPassword = document.getElementById("confirmPasswordTxt");

export function setUpEye() {
	const eye = document.getElementById("passwordShow");

	eye.onclick = function () {
		if (password.type == "password") {
			password.type = "text";
			eye.className = "fa fa-eye";
		} else if (password.type == "text") {
			password.type = "password";
			eye.className = "fa fa-eye-slash";
		}
	};
}

export function setUpConfirmEye() {
	const eyeConfirm = document.getElementById("passwordShow2");

	eyeConfirm.onclick = function () {
		if (confirmPassword.type == "password") {
			confirmPassword.type = "text";
			eyeConfirm.className = "fa fa-eye";
		} else {
			confirmPassword.type = "password";
			eyeConfirm.className = "fa fa-eye-slash";
		}
	};
}
