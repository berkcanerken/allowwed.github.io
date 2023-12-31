document.addEventListener("DOMContentLoaded", function() {
    var consultBtn = document.getElementById("consult-btn");

    function redirectToForm() {
        window.open('https://forms.gle/qXS4AP12PDsUmiJt7', '_blank');
    }

    consultBtn.addEventListener("click", redirectToForm);
});


window.onload = () => {

	const toggler = new Toggler();

	document.getElementById("navbtn").addEventListener("click", () => {
			toggler.toggleSlide("navLink", "right", .5);
			toggler.toggleClass("open_text", "fa-bars", "fa-xmark");
	});
}