const exp = gsap.timeline({
    scrollTrigger: {
      trigger: ".experience",
      start: "top top",
      end: "+=500",
      scrub: true,
      markers: true,
      pin: ".experience"
    }
  });
  
  exp.to(".experience-middle", {
    "--progress1": 5,
    ease: "none",
    smoothOrigin: true
  });
  exp.from(
    ".extraBox",
    {
      scaleX: 0,
      ease: "none"
    },
    "-=0.4"
  );