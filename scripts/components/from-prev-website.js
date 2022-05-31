const showPageAnimation = () => {
    TweenMax.to(
        ".first-popup-cya",
        .7,
        {
            x: '130%',
            y: '-15vh', 
            rotate: 13, 
            ease: "expo.in",
            delay: 0.25,
        }
    );
    TweenMax.to(
        ".second-popup-cya",
        .7,
        {
            x: '130%',
            y: '-15vh', 
            rotate: 13, 
            ease: "expo.in",
            delay: 0.1,
        }
    );
}

showPageAnimation();
