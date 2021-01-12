const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
    popupContent = document.querySelector('.popup-content'),
    popupBtn = document.querySelectorAll('.popup-btn');
 
    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
                popup.style.display = 'block';
            if(document.documentElement.clientWidth > 768){
                let count = -30;
                popupContent.style.left = `${count}%`;
    
            let timer = setInterval(() => {
                if (count === 38) {
                    clearInterval(timer);
                } else { 
                    popupContent.style.left = `${++count}%`;
                }
              }, 20);
            } 
        });
    });


    popup.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close')){
            popup.style.display = 'none';
        } else { 
            target = target.closest('.popup-content');

                if(!target){
                    popup.style.display = 'none';
                }

        }

       
    })
};

export default togglePopUp;