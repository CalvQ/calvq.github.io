// Toggle the "scrolled" state on the top bar so the logo shifts once the
// page moves. The homepage never scrolls, so this never fires there.
(function () {
    var bar = document.querySelector(".topbar");
    if (!bar) return;

    function onScroll() {
        if (window.scrollY > 8) {
            bar.classList.add("scrolled");
        } else {
            bar.classList.remove("scrolled");
        }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Mark the current page's nav link as active.
    var here = location.pathname.split("/").pop() || "index.html";
    var links = document.querySelectorAll(".nav a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href") === here) {
            links[i].classList.add("active");
        }
    }
})();
