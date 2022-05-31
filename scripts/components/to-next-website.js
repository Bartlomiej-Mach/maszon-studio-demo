const changePageAnimation = () => {
    TweenMax.to(
        ".first-popup",
        .01,
        {
            x: '-125%',
            y: '-15vh', 
            rotate: -13, 
        }
    );
    TweenMax.to(
        ".second-popup",
        .01,
        {
            x: '-125%',
            y: '-15vh', 
            rotate: -13, 
        }
    );
    TweenMax.to(
        ".to-next-websites",
        .01,
        {
            opacity: 1,
        }
    );
    TweenMax.to(
        ".first-popup",
        .7,
        {
            x: '0%',
            y: '-15vh', 
            rotate: 0, 
            ease: "expo.in",
        }
    );
    TweenMax.to(
        ".second-popup",
        .7,
        {
            x: '0%',
            y: '-15vh', 
            rotate: 0, 
            ease: "expo.in",
            delay: 0.15,
        }
    );
    TweenMax.to(
        ".to-next-websites",
        .1,
        {
            opacity: 0,
            delay: 1.55,
        }
    );
}

const delayLink = (URL) => {
    setTimeout(() => {
         window.location = URL         
    }, 1400);
}

const changePage = () => {
    const logoNav = document.querySelector('.navigation-primary-content__logo-container--logo');
    const logoFooter = document.querySelector('.footer-primary-content__logo--logo');
    const navLinks = document.querySelectorAll('.nav-link');
    const footerLinks = document.querySelectorAll('.footer-link');
    
    const buttonPrimary = document.querySelectorAll('.btn-primary');
    const homeGaleryImg = document.querySelectorAll('.gallery-image');

    const projectChooser = document.querySelectorAll('.dashboard-projects-content__col');

    const projectBack = document.querySelector('.dashboard-website-projects-back-button');

    const elementButtons = document.querySelectorAll('.ofert-section-content__floor__img');

    if(buttonPrimary) {
        buttonPrimary.forEach(element => {
            element.addEventListener('click', changePageAnimation);
        });
    }

    if(homeGaleryImg) {
        homeGaleryImg.forEach(element => {
            element.addEventListener('click', changePageAnimation);
        });
    }

    if(projectChooser) {
        projectChooser.forEach(element => {
            element.addEventListener('click', changePageAnimation);
        })
    }

    if(elementButtons) {
        elementButtons.forEach(element => {
            element.addEventListener('click', changePageAnimation);
        })
    }

    if(projectBack) {
        projectBack.addEventListener('click', changePageAnimation);
    }

    logoNav.addEventListener('click', changePageAnimation);
    logoFooter.addEventListener('click', changePageAnimation);
    
    navLinks.forEach(element => {
        element.addEventListener('click', changePageAnimation);
    });

    footerLinks.forEach(element => {
        element.addEventListener('click', changePageAnimation);
    });

}

changePage();
