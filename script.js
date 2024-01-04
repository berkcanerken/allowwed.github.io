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
			toggler.toggleSlide("navLink", "right", .4);
			toggler.toggleClass("open_text", "fa-bars", "fa-xmark");
	});
}


// document.addEventListener('click', function (event) {
//     const navLink = document.getElementById('navLink');
//     const navbtn = document.getElementById('navbtn');
//     const open_text = document.getElementById('open_text');

//     // Check if the clicked element is not the #navLink itself
//     if (event.target !== navLink && event.target !== navbtn && open_text.classList.contains('x-mark')) {
//         const toggler = new Toggler();
//         toggler.toggleSlide("navLink", "right", .4);
//     }
// });