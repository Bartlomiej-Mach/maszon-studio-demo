const welcomeAnimation = () => {
    TweenMax.to(
        ".welcome-animation__inner",
        .5,
        {
            x: '0',
            y: '-15vh', 
            rotate: 0, 
            ease: "expo.in",
            delay: .5,
        }
    );
    TweenMax.to(
        ".logo-welcome",
        .2,
        { 
            opacity: 1,
            delay: 1,
        }
    );
    TweenMax.to(
        ".colored-items",
        .2,
        { 
            opacity: 1,
            delay: 1.1,
            scale: 1.1,
        }
    );
    TweenMax.to(
        ".colored-items",
        4,
        { 
            delay: 1.1,
            rotate: -20,
            delay: 1,
        }
    );
    TweenMax.to(
        ".welcome-animation",
        0.6,
        {   
            y: '-105%',
            ease: "expo.in",
            delay: 2.4,
        }
    );

}

welcomeAnimation();