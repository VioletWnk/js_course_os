const changeImage = () => {
    const command = document.querySelector('#command');
    const changeImg = (event) => {
        if(event.target.matches('.command__photo')){
            let image = event.target.getAttribute('data-img'),
                src = event.target.getAttribute('src');
                event.target.setAttribute('src', image);
                event.target.setAttribute('data-img', src);
        }
    };

    
    command.addEventListener('mouseover', (event) => {
        changeImg(event);
    });

    command.addEventListener('mouseout', (event) => {
        changeImg(event);
    });

};
export default changeImage;