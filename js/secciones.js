const sections = document.querySelectorAll("section");

let firstScroll = false;

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        sections.forEach(section => section.classList.remove("aparece"));
        firstScroll = false;
    }

    if (!firstScroll && window.scrollY > 0) {
        firstScroll = true;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("aparece");
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
    }
});