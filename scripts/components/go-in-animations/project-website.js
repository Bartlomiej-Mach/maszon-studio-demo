const getIn = () => {
    const contentContainer = document.querySelector('.dashboard-website-projects-content');
    const imgContainer = document.querySelector('.dashboard-website-projects-content__link-to-web');
    const linkContainer = document.querySelector('.dashboard-website-projects-content__link-to-web--link');
    const textContainer = document.querySelector('.dashboard-website-projects-content__text');
    const backBtnContainer = document.querySelector('.dashboard-website-projects-back-button');

    const tl = gsap.timeline();

    tl.from(contentContainer, {
        y: '100%',
        duration: 1,
        ease: "expo.in",
        delay: 0.1,
    });
    tl.from(imgContainer, {
        opacity: 0,
    });
    tl.from(imgContainer, {
        y: '-110%',
        duration: .6,
        ease: "expo.in",
    }, '<');
    tl.from(linkContainer, {
        opacity: 0,
        duration: .5,
        ease: "expo.in",
    });
    tl.from(textContainer, {
        opacity: 0,
        duration: .5,
        ease: "expo.in",
    }, '<');
    tl.from(backBtnContainer, {
        opacity: 0,
        duration: .5,
        
    }, '<');

    
}

getIn();