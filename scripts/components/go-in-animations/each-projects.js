const getIn = () => {
    
    const heading = document.querySelector('.dashboard-each-projects-content__heading h1 div');
    const arrow = document.querySelector('.dashboard-each-projects-content__heading--arrow img');
    const subheading = document.querySelector('.dashboard-each-projects-content__heading--subheading span');
    const arrowMobile = document.querySelector('.dashboard-each-projects-content__heading--arrow-2');

    const tl = gsap.timeline();

    tl.from(heading, {
        y: '-120%',
        duration: 0.5,
        ease: "back.inOut(1.7)",
        delay: 1,
    });
    tl.from(arrow, {
        y: '-135%',
        ease: "back.in(1.7)",
        duration: 0.5,
    });
    tl.from(subheading, {
        y: '135%',
        rotate: 10,
        ease: "back.inOut(1.7)",
        duration: 0.5,
        
    }, "<");
    tl.from(arrowMobile, {
        y: '-135%',
        ease: "back.in(1.7)",
        duration: 0.5,
        
    }, "<");
}


getIn();