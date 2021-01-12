const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const forms = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'color: #fff;'


    forms.forEach((form) => { 
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            
            let validation = false;
            // validate inputs

            form.querySelectorAll('input').forEach((input)  => {

                console.log(input.value);
                if(input.matches('[name="user_phone"]')){
                    if(!input.value.match(/^\+?([78])?\d{6,10}$/)){
                        alert('Введите корректный номер телефона');
                        return;
                    }
                }
                if(input.matches('[name="user_name"]')){
                    if(!input.value.match(/^[а-яА-Я\s]{2,}$/ug)){
                        alert('Введите корректное имя');
                        return;
                    }
                }
                if(input.matches('[name="user_message"]')){
                    if(!input.value.match(/^[а-яА-Я\s\W]+$/ug)){
                        alert('Введите сообщение');
                        return;
                    }
                }
                if(input.matches('[name="user_email"]')){
                    if(!input.value.match(/^.+@.+\.[a-z]+$/)){
                        alert('Введите корректный email');
                        return;
                    }
                }
                validation = true;
                
            });

            
            
        if(validation) {
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            postData(formData)
            .then((response) => {
                if (response.status !== 200){
                    throw new Error('status network is not 200');
                }
                statusMessage.textContent = successMessage;
                forms.forEach((form) => {
                    form.querySelectorAll('input').forEach((input) => {
                        input.value = '';
                    }); 
                });
        
            }) //это resolve
            .catch((error) => {
                statusMessage.textContent = errorMessage; 
                console.error(error);
            }); //это reject
        } 
            
        });
    });

    const postData = (userData) => {

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
    };


};

export default sendForm;