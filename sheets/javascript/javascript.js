window.onscroll = function() {
	navBarFunction();
};

//https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
//basically pulled it straight from the site but I see what it's doing. I do wonder how much of it is redundant but I can worry about that later
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function navBarFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

// this is in javascript and I'm at least here
console.log("still here, yay! :)");
