const getIn = () => {
    const contentContainer = document.querySelector('.dashboard-website-projects-content');
    const textContainer = document.querySelector('.dashboard-website-projects-content__text');
    const backBtnContainer = document.querySelector('.dashboard-website-projects-back-button');

    const tl = gsap.timeline();
    tl.to(contentContainer, {
        opacity: 1,
        duration: 0.2,
    });
    tl.from(contentContainer, {
        y: '-100%',
        duration: 1,
        ease: "expo.in",
        delay: 0.1,
    });
    tl.from(textContainer, {
        opacity: 0,
        duration: .5,
        ease: "expo.in",
    });
    tl.from(backBtnContainer, {
        opacity: 0,
        duration: .5,
        
    });

    
}

getIn();