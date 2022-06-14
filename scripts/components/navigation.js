document.write(`

<nav class="navigation-primary">
        <div class="container">
            <div class="navigation-primary-content">
                <div class="navigation-primary-content__logo-container">
                    <a class="navigation-primary-content__logo-container--logo" href="javascript:delayLink('../intro')">
                        <img src="../assets/imgs/logo/logo.svg" alt="Maszon Studio">
                        <div class="sub-logo">
                            <span>
                                MASZON
                            </span>
                            <span>
                                STUDIO
                            </span>
                        </div>
                    </a>
                </div>
                <div class="navigation-primary-content__navigation-container">
                    <button class="navigation-primary-content__navigation-container--nav-button">
                        <div class="top-line line"></div>
                        <div class="bottom-line line"></div>
    
                        <div class="close-x">
                            <div class="close-x-line"></div>
                            <div class="close-x-line"></div>
                        </div>
                    </button>
                    <div class="navigation-primary-content__navigation-container--nav-list">
                        <div class="navigation-primary-content__navigation-container--nav-list--inner"></div>
                        <div class="navigation-primary-content__navigation-container--nav-list--inner"></div>
                        <div class="navigation-primary-content__navigation-container--nav-list--inner"></div>
                        <ul>
                            <li>
                                <a href="javascript:delayLink('../intro')" class="nav-link">
                                    <div class="text-box top">
                                        <span>INTRO</span>
                                    </div>
                                    <div class="text-box bottom">
                                        <span>INTRO</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:delayLink('../projekty')" class="nav-link reverse-hover">
                                    <div class="text-box top">
                                        <span>PROJEKTY</span>
                                    </div>
                                    <div class="text-box bottom">
                                        <span>PROJEKTY</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:delayLink('../studio')" class="nav-link">
                                    <div class="text-box top">
                                        <span>STUDIO</span>
                                    </div>
                                    <div class="text-box bottom">
                                        <span>STUDIO</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:delayLink('../kontakt')" class="nav-link reverse-hover">
                                    <div class="text-box top">
                                        <span>KONTAKT</span>
                                    </div>
                                    <div class="text-box bottom">
                                        <span>KONTAKT</span>
                                    </div>
                                </a>
                            </li>
                        </ul>    
                    </div>
                </div>
                <div class="navigation-primary-content__progress-bar-container">
                    <progress max="100" value="0"></progress>
                </div>
            </div>
        </div>
    </nav>


`);


const navButton = document.querySelector('.navigation-primary-content__navigation-container--nav-button');
const navList = document.querySelector('.navigation-primary-content__navigation-container--nav-list');
const subLogo = document.querySelector('.sub-logo');


const openNav = () => {
    navList.classList.toggle('nav-list-active');
    subLogo.classList.toggle('sub-logo-active');
    navButton.classList.toggle('nav-btn-active');
}

navButton.addEventListener('click', openNav);

gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});