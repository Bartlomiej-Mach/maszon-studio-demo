const imgElements = document.querySelectorAll('.projects-list-content__row .projects-list-content__row__img--project-img img');
const flyElementsContainer = document.querySelector('.project-img-inner');
let numberOfProjects = 1;

const projectLinks = document.querySelectorAll('.projects-list-content__row__img');

const CheckNumberOfProjects = () => {
    imgElements.forEach(() => {
        numberOfProjects++;
    });
}

const CreateFlyElementsWebsite = () => {
    for(let i = 1; i < numberOfProjects; i++) {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('project-img-inner__img');
        imgContainer.style.backgroundImage = "url('../../assets/imgs/projects/website/w" + i + ".png')";
        flyElementsContainer.appendChild(imgContainer);
    }
}

const CreateFlyElementsLogo = () => {
    for(let i = 1; i < numberOfProjects; i++) {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('project-img-inner__img');
        imgContainer.style.backgroundImage = "url('../../assets/imgs/projects/logo/l" + i + ".png')";
        flyElementsContainer.appendChild(imgContainer);
    }
}

const CreateFlyElementsCard = () => {
    for(let i = 1; i < numberOfProjects; i++) {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('project-img-inner__img');
        imgContainer.style.backgroundImage = "url('../../assets/imgs/projects/cards/c" + i + ".png')";
        flyElementsContainer.appendChild(imgContainer);
    }
}

const CreateFlyElementsGraphic = () => {
    for(let i = 1; i < numberOfProjects; i++) {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('project-img-inner__img');
        imgContainer.style.backgroundImage = "url('../../assets/imgs/projects/graphic/g" + i + ".png')";
        flyElementsContainer.appendChild(imgContainer);
    }
}


CheckNumberOfProjects();

if(document.querySelector('.website-js')) {
    CreateFlyElementsWebsite();
}

if(document.querySelector('.logo-js')) {
    CreateFlyElementsLogo();
}
if(document.querySelector('.card-js')) {
    CreateFlyElementsCard();
}
if(document.querySelector('.graphic-js')) {
    CreateFlyElementsGraphic();
}

const newFlyElement = document.querySelectorAll('.project-img-inner__img');

const StartAnimationOnClick = (el) => {
    TweenMax.to(
        newFlyElement[el],
        .01,
        {   
            opacity: 1,
            y: 0,
            "clip-path": "polygon(0 0, 100% 30%, 100% 100%, 0% 100%)",
        }
    );
    TweenMax.to(
        newFlyElement[el],
        .3,
        {   
            "clip-path": "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            y: '-100vh',  
            ease: "expo.in",
        }
    );
    TweenMax.to(
        newFlyElement[el],
        .1,
        {   
            opacity: 0,
            delay: 0.4,
        }
    );
}

for(let i = 0; i < projectLinks.length; i++) {
    projectLinks[i].addEventListener('click', () => {
        StartAnimationOnClick(i);
    });
}


const delayLinkForProjects = (URL) => {
    setTimeout(() => {
         window.location = URL         
    }, 800);
}


