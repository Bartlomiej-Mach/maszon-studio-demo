document.write(`

    <footer class="footer-primary">
        <div class="container">
            <div class="footer-primary-content">
                <div class="footer-primary-content__logo">
                    <a class="footer-primary-content__logo--logo" href="javascript:delayLink('../intro')">
                        <img src="../assets/imgs/logo/logo.svg" alt="logo">
                    </a>
                </div>
                <div class="footer-primary-content__name">
                    <span>MASZON STUDIO</span>
                </div>
                <div class="footer-primary-content__social">
                    <a href="https://www.facebook.com/MaszonStudio/" rel="noreferrer" target="blank" class="social-media-content__social--col">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/maszon_studio/" rel="noreferrer" target="blank" class="social-media-content__social--col">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
                <div class="footer-primary-content__nav">
                    <ul>
                        <li>
                            <a class="footer-link" href="javascript:delayLink('../intro')">
                                <div class="text-box top">
                                    <span>INTRO</span>
                                </div>
                                <div class="text-box bottom">
                                    <span>INTRO</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a class="footer-link" href="javascript:delayLink('../projekty')">
                                <div class="text-box top">
                                    <span>PROJEKTY</span>
                                </div>
                                <div class="text-box bottom">
                                    <span>PROJEKTY</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a class="footer-link" href="javascript:delayLink('../studio')">
                                <div class="text-box top">
                                    <span>STUDIO</span>
                                </div>
                                <div class="text-box bottom">
                                    <span>STUDIO</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a class="footer-link" href="javascript:delayLink('../kontakt')">
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
                <div class="footer-primary-content__privacy">
                    <span>
                        &copy; 2021 - <span class="actualy-year">20</span> Maszon Studio | Wszystkie prawa zastrzeżone
                    </span>
                </div>
            </div>
        </div>
    </footer>

`);



const getCurrentYear = () => {
    const footerPrivacy = document.querySelector('.actualy-year');
    footerPrivacy.innerHTML = new Date().getFullYear();
}

getCurrentYear();