document.addEventListener("DOMContentLoaded", function() {
    var consultBtn = document.getElementById("consult-btn");

    function redirectToForm() {
        window.open('https://forms.gle/qXS4AP12PDsUmiJt7', '_blank');
    }

    consultBtn.addEventListener("click", redirectToForm);
});
