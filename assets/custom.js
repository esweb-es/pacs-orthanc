

document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll("*");
    elements.forEach(function (element) {
        if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
            element.textContent = element.textContent.replace(/StudyList|Study List/g, "Lista de estudios");
        }
        element.style.backgroundColor = "red";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var studyListLink = document.querySelector("a.header-btn.header-studyListLinkSection");
    if (studyListLink) {
        studyListLink.textContent = "Lista de estudios";
    }
});