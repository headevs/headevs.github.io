

// TUTORIAL PAGES

var dmButton = document.getElementById("dmButton");
var dropdownButton = document.getElementById("snButton");

dmButton.onclick = function () {
    document.body.classList.toggle("switch-theme");
}

dropdownButton.onclick = function () {
    document.body.classList.toggle("sidenav-open");
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.warn('Target element not found: ' + targetId);
        }
    });
});

function toggleCodeContainer(containerNumber) {
    var codeContainer = document.getElementById("codeContainer" + containerNumber);
    var maxHeight = codeContainer.style.maxHeight;

    if (maxHeight === "0px" || maxHeight === "") {
        codeContainer.style.display = "block";
        codeContainer.style.maxHeight = codeContainer.scrollHeight + "px";
    } else {
        codeContainer.style.maxHeight = "0";
        setTimeout(function () {
            codeContainer.style.display = "none";
        }, 300);
    }
}