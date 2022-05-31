gsap.utils.toArray(".dashboard-mini").forEach((el, i) => {
    el.bg = el.querySelector(".dashboard-mini__bg"); 
    
    
    // Do the parallax effect on each el
    if (i) {
      el.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
  
      gsap.to(el.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scrub: true
        }
      });
    } 
    
    // the first image should be positioned against the top. Use px on the animating part to work with GSAP. 
    else {
      el.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`; 
  
      gsap.to(el.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom", 
          end: "bottom top",
          scrub: true
        }
      });
    }
});

gsap.utils.toArray(".dashboard-each-projects").forEach((el, i) => {
  el.bg = el.querySelector(".dashboard-each-projects__bg"); 
  
  
  // Do the parallax effect on each el
  if (i) {
    el.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

    gsap.to(el.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scrub: true
      }
    });
  } 
  
  // the first image should be positioned against the top. Use px on the animating part to work with GSAP. 
  else {
    el.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`; 

    gsap.to(el.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom", 
        end: "bottom top",
        scrub: true
      }
    });
  }
});