

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
            var copyButton = document.getElementById('buttonGroup' + containerNumber).querySelector('.copyButton');
            var outputButton = document.getElementById('buttonGroup' + containerNumber).querySelector('.outputButton');
            var downloadButton = document.getElementById('buttonGroup' + containerNumber).querySelector('.downloadButton');

            var maxHeight = codeContainer.style.maxHeight;

            if (maxHeight === "0px" || maxHeight === "") {
                codeContainer.style.display = "block";
                codeContainer.style.maxHeight = codeContainer.scrollHeight + "px";
                copyButton.style.display = "inline";
                outputButton.style.display = "inline";
                downloadButton.style.display = "inline";
            } else {
                codeContainer.style.maxHeight = "0";
                setTimeout(function () {
                    codeContainer.style.display = "none";
                    copyButton.style.display = "none";
                    outputButton.style.display = "none";
                    downloadButton.style.display = "none";
                }, 300);
            }
        }

        function copyCode(containerNumber) {
            var codeContainer = document.getElementById("codeContainer" + containerNumber);
            var codeToCopy = codeContainer.querySelector('code').innerText;

            var tempTextarea = document.createElement('textarea');
            tempTextarea.value = codeToCopy;
            document.body.appendChild(tempTextarea);

            tempTextarea.select();
            document.execCommand('copy');

            document.body.removeChild(tempTextarea);

            alert('Code copied to clipboard!');
        }

        function runCode(containerNumber) {
            var codeContainer = document.getElementById("codeContainer" + containerNumber);
            var codeToRun = codeContainer.querySelector('code').innerText;

            var blob = new Blob(['<!DOCTYPE html><html>' + codeToRun + '</html>'], { type: 'text/html' });

            var outputWindow = window.open(URL.createObjectURL(blob), '_blank');

        }

        function downloadCode(containerNumber) {
            var codeContainer = document.getElementById("codeContainer" + containerNumber);
            var codeToDownload = codeContainer.querySelector('code').innerText;

            var blob = new Blob(['<!DOCTYPE html><html>' + codeToDownload + '</html>'], { type: 'text/html' });

            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'output.html';

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);

        }