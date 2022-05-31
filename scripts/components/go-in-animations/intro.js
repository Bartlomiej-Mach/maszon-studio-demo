const getIn = () => {
    
    const heading = document.querySelector('.dashboard-primary-content__heading h1');
    const subheading = document.querySelector('.dashboard-primary-content__heading .subheading span');
    const subheadingImg = document.querySelector('.dashboard-primary-content__heading .subheading svg');

    const buttonBigText = document.querySelector('.text-content .big-text');
    const buttonSmallText = document.querySelector('.text-content .small-text');

    const buttonCircle = document.querySelector('.button-circle');

    const tl = gsap.timeline();

    tl.from(heading, {
        y: '-120%',
        duration: 0.5,
        ease: "back.inOut(1.7)",
        delay: 1,
    });
    tl.from(subheading, {
        y: '135%',
        rotate: -10,
        ease: "back.inOut(1.7)",
        duration: 0.5,
    });
    tl.from(subheadingImg, {
        y: '135%',
        ease: "back.inOut(1.7)",
        duration: 0.3,
    }, '<');
    tl.from(buttonBigText, {
        x: '-150%',
        ease: "back.inOut(1.7)",
        duration: 0.3,
    });
    tl.from(buttonSmallText, {
        x: '150%',
        ease: "back.inOut(1.7)",
        duration: 0.4,
    })
    tl.from(buttonCircle, {
        opacity: 0,
        ease: "back.inOut(1.7)",
        duration: 0.4,
    })
}

getIn();