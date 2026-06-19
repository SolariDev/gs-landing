gsap.registerPlugin(SplitText);

const split = SplitText.create(
    ".logo", { type: "chars"}
);

gsap.timeline()
    .set(".preloader", { autoAlpha:1 }, 0)
    .from(".logo", {
        scale: 0.7,
        duration: 6,
        ease: "none"
        }, 0
    )
    .from(
        split.chars, {
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "none"
        }, 0
    )
    .from(
        split.chars, {
            rotationY: 360,
            duration: 0.5,
            stagger: 0.1,
            ease: "none"
        }, 0.1
    )
    .to(".preloader", {
        autoAlpha: 0,
        duration: 4.5,
        ease: "power1.out"
        },0
    )
    .to("main", {
        opacity: 1,
        duration: 0.5
        }, 3.5
    );