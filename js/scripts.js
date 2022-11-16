const DesktopLinks = document.querySelectorAll("#navbar a")

DesktopLinks.forEach((link => {
    link.addEventListener("click", smoothcroll)
}
))

function smoothcroll(e){
    e.preventDefault();

    const href = this.getAttribute("href")
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth",
    });
}