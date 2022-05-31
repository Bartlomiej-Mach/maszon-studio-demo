const getIn = () => {
    
    const heading = document.querySelector('.dashboard-about-content__heading h1');
    const subheading = document.querySelector('.dashboard-about-content__subheading p');
    const subheadingLink = document.querySelector('.dashboard-about-content__subheading a');

    const tl = gsap.timeline();

    tl.from(heading, {
        y: '120%',
        rotate: 10,
        duration: 0.5,
        ease: "back.inOut(1.7)",
        delay: 1,
    });
    tl.from(subheading, {
        y: '-135%',
        rotate: -10,
        ease: "back.inOut(1.7)",
        duration: 0.5,
    });
    tl.from(subheadingLink, {
        y: '135%',
        rotate: 10,
        ease: "back.inOut(1.7)",
        duration: 0.5,
        
    }, "<");
}


getIn();