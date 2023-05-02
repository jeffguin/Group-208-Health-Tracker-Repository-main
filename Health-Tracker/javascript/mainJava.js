const mobileNavMenu = document.getElementById("mobileNavMenu");
const navigation = document.getElementsByTagName("ul")[0];
const toTop = document.getElementById("topBtn");
const logout = document.getElementsByClassName("logout")[0];
const logoutDialog = document.getElementsByClassName("logoutDialog")[0];
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

mobileNavMenu.addEventListener("click", () => {
	console.log("navMenu clicked");
	navigation.classList.toggle("show");
	//Remove focus from confirmBtn after logoutDialog is shown
	navigation.blur();
});

toTop.addEventListener("click", () => {
	backToTop();
});

logout.addEventListener("click", () => {
	logoutDialog.style.display = "flex";
	logoutDialog.showModal();
	//Remove focus from confirmBtn after logoutDialog is shown
	confirmBtn.blur();
	//Scrolls the web page to logout dialog box
	logoutDialog.scrollIntoView({ behavior: "smooth", block: "center" });
});

confirmBtn.addEventListener("click", () => {
	window.location.href = "Login Page.html";
});

cancelBtn.addEventListener("click", () => {
	logoutDialog.style.display = "none";
	logoutDialog.close();
});

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
	showTopBtn();
};

function showTopBtn() {
	if (window.pageYOffset > 100) {
		toTop.style.display = "flex";
	} else {
		toTop.style.display = "none";
	}
}
