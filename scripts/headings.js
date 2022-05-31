faviconInit = () => {
    document.write(`
        <link rel="shortcut icon" href="../assets/imgs/icon/icon.png" type="image/x-icon">
    `);
}

tittleInit = () => {
    document.write(`
        <title>Maszon Studio 🤟</title>
    `);
}

descritpionInit = () => {
    document.write(`
        <meta name="description" content="
            Maszon Studio - profesjonalne studio zajmujące się tworzeniem nietuzinkowych stron internetowych oraz nowoczesnych projektów graficznych. 
        ">
    `);
}

authorInit = () => {
    document.write(`
        <meta name="author" content="Maszon Studio &reg;"></meta>
    `);
} 

ogInit = () => {
    document.write(`
        <meta property="og:title" content="Maszon Studio - Nowy wymiar reklamy🔥">
        <meta property="og:image" content="../assets/imgs/baner/baner.png">
        <meta property="og:description" content="
            Maszon Studio - profesjonalne studio zajmujące się tworzeniem nietuzinkowych stron internetowych oraz nowoczesnych projektów graficznych.
        ">
        <meta property="og:url" content="https://maszon-studio.com">
        <meta property="og:site_name" content="Maszon Studio">
        <meta property="og:type" content="website">
    `);
}

googleSpecInit = () => {
    document.write(`
        <meta name="googlebot" content="index,follow">
        <meta name="robots" content="index,follow,noodp">
    `);
}

keywordsInit = () => {
    document.write(`
        <meta name="keywords" content="
            strony internetowe,
            strony internetowe pilica,
            strony internetowe zawiercie,
            strony internetowe ogrodzieniec,
            strony internetowe slask,
            strony internetowe katowice,
            strony internetowe sosnowiec,
            strony internetowe wolbrom,
            strony internetowe slawniow,
            strony internetowe zarnowiec,
            strony internetowe śląsk,
            strony internetowe sławniów,
            strony internetowe żarnowiec,
            
            grafik,
            grafik pilica,
            grafik zawiercie,
            grafik ogrodzieniec,
            grafik slask,
            grafik katowice,
            grafik sosnowiec,
            grafik wolbrom,
            grafik slawniow,
            grafik zarnowiec,
            
            logo,
            logo pilica,
            logo zawiercie,
            logo ogrodzieniec,
            logo slask,
            logo katowice,
            logo sosnowiec,
            logo wolbrom,
            logo slawniow,
            logo zarnowiec,
            
            wizytowki,
            wizytowki pilica,
            wizytowki zawiercie,
            wizytowki ogrodzieniec,
            wizytowki slask,
            wizytowki katowice,
            wizytowki sosnowiec,
            wizytowki wolbrom,
            wizytowki slawniow,
            wizytowki zarnowiec,

            projekty graficzne,
            projekty graficzne pilica,
            projekty graficzne zawiercie,
            projekty graficzne ogrodzieniec,
            projekty graficzne slask,
            projekty graficzne katowice,
            projekty graficzne sosnowiec,
            projekty graficzne wolbrom,
            projekty graficzne slawniow,
            projekty graficzne zarnowiec,

            maszon studio,
            maszon studio pilica,
            maszon studio zawiercie,
            maszon studio ogrodzieniec,
            maszon studio slask,
            maszon studio katowice,
            maszon studio sosnowiec,
            maszon studio wolbrom,
            maszon studio slawniow,
            maszon studio zarnowiec,

            banery pilica,
            banery zawiercie,
            banery ogrodzieniec,
            banery slask,
            banery katowice,
            banery sosnowiec,
            banery wolbrom,
            banery slawniow,
            banery zarnowiec,
        ">
    `);
}



initHeadElements = () => {
    faviconInit();
    tittleInit();
    descritpionInit();
    authorInit();
    ogInit();
    keywordsInit();
    googleSpecInit();
}

initHeadElements();
