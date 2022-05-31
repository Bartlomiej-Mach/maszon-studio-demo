const customCursor = document.querySelector('.custom-cursor');
const galeryImgs = document.querySelectorAll('.gallery-image');


const showCursor = () => {
    customCursor.classList.toggle('custom-cursor--active');
}
const hideCursor = () => {
    customCursor.classList.toggle('custom-cursor--active');
}


galeryImgs.forEach(element => {
    element.addEventListener('mouseover', showCursor);
});
galeryImgs.forEach(element => {
    element.addEventListener('mouseout', showCursor);
});


const onMouseMove = (e) =>{
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);