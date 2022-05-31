const getIn = () => {
    
    const heading = document.querySelector('.dashboard-studio-content__heading h1');
    const subheading = document.querySelector('.dashboard-studio-content__heading .subheading');
    const subheadingTwo = document.querySelector('.dashboard-studio-content__subheading span');

    const tl = gsap.timeline();

    tl.from(heading, {
        y: '120%',
        rotate: 10,
        duration: 0.5,
        ease: "back.inOut(1.7)",
        delay: 1,
    });
    tl.from(subheading, {
        y: '-335%',
        rotate: -10,
        ease: "back.inOut(1.7)",
        duration: 0.5,
    }, '<');
    tl.from(subheadingTwo, {
        width: 0,
        ease: "back.inOut(1.7)",
        duration: 0.5,
        
    });
}

getIn();