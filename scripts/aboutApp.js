gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();
tl.from(".big-title", { y: 500, opacity: 0, duration: 1, stagger: 0.3 });

tl.to("body", {
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".faq",
    start: "top center",
    //  end: "top center ",
    //  markers: true,
    scrub: 1,
    toggleClass: { targets: ".oval-section", className: "oval-black-theme" },
  },
});
tl.to("body", {
  background: "var(--custom-white)",
  scrollTrigger: {
    trigger: ".faq",
    start: "top center",
    // markers: true,
    end: "top center ",
    scrub: 0.01,
  },
});

// THR TOGGLE FAQ

const faqs = document.querySelectorAll(".question");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    let iconPlus = faq.children[0].children[1];

    faqs.forEach((faq2) => {
      if (faq2 !== faq) {
        faq2.children[1].classList.remove("show-text");
        //the iconPlus
        faq2.children[0].children[1].classList.remove("rotate-icon");
      }
    });

    iconPlus.classList.toggle("rotate-icon");
    faq.children[1].classList.toggle("show-text");
    // faq.scrollIntoView();
  });
});

//PARALLAX GUMMY IMG =================================================================================
gsap.utils.toArray(".gummy-img").forEach((card) => {
  const speed = card.dataset.speed * 100;
  tl.to(card, {
    y: `${speed}`,
    ease: "none",
    scrollTrigger: {
      start: "top top",
      marker: true,
      end: "bottom top",
      scrub: 1,
    },
  });
});
