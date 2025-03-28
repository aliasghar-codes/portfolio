const lenis = new Lenis({
    anchors: true,
    autoRaf: true,
});

const mobileLinkSection = document.getElementById("links-nav-mobile");
const projectLabel = document.querySelectorAll("#label");
const projectLine = document.querySelectorAll("#project-line");
const videoOverlay = document.getElementById("video-overlay");
const projectImages = document.querySelectorAll("#project-image");
const projectVideos = document.querySelectorAll("#project-video");

let videoTag;

function showMobileNavOnScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition == 0) {
        mobileLinkSection.classList.remove("bottom-5");
        mobileLinkSection.classList.add("opacity-0", "-bottom-20");

    } else {
        mobileLinkSection.classList.remove("-bottom-20", "opacity-0");
        mobileLinkSection.classList.add("bottom-5");
    }

}

projectLine.forEach((line, index) => {
    line.addEventListener("mousemove", e => {
        const label = projectLabel[index];

        label.classList.remove("top-[40%]", "opacity-0");
        label.classList.add("top-[28%]", "opacity-100");

    })
});

projectLine.forEach((line, index) => {
    line.addEventListener("mouseleave", e => {
        const label = projectLabel[index];

        label.classList.remove("top-[28%]", "opacity-100");
        label.classList.add("top-[40%]", "opacity-0");
    })
});

projectImages.forEach((img, ind) => {
    img.addEventListener("click", e => {
        videoTag = projectVideos[ind];

        videoOverlay.classList.remove("hidden");

        videoTag.classList.remove("w-1", "absolute", "top-1/4", "left-1/4", "hidden", "z-40");
        videoTag.classList.add("w-4/5", "translate-x-1/2", "top-1/2", "-translate-y-1/2", "right-1/2", "fixed", "z-[99999]");
    });
});

videoOverlay.addEventListener("click", e => {

    videoOverlay.classList.add("hidden");

    videoTag.pause();
    videoTag.classList.add("w-1", "absolute", "top-1/4", "left-1/4", "z-40");
    videoTag.classList.remove("w-4/5", "fixed", "top-1/2", "-translate-y-1/2", "right-1/2", "translate-x-1/2", );
    videoTag = null;
});

window.addEventListener("scroll", showMobileNavOnScroll)