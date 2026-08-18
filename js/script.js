window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const topBar = document.querySelector(".top-bar");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        topBar.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        topBar.classList.remove("scrolled");
    }
});
