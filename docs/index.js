document.addEventListener('DOMContentLoaded', function(){ 
    const sections = document.querySelectorAll(".content");
    const menu_links = document.querySelectorAll(".dropdown-item");
    const makeActive = (link) => menu_links[link].classList.add("current");
    const removeActive = (link) => menu_links[link].classList.remove("current");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
    const sectionMargin = 150;
    let currentActive = 0;
    window.addEventListener("scroll", () => {
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1
    if (current !== currentActive) {
        removeAllActive();
        currentActive = current;
        makeActive(current);
    }
    });
}, false);