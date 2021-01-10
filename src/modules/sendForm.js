const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    // const form = document.getElementById('form1');
    const forms = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'color: #fff;'


    //validation

    const validateInputs = () => {

        const mainBlock = document.querySelector('body');
        mainBlock.addEventListener('input', (event) => {

            if(event.target.matches('[name="user_phone"]')){
                let inputPhone = event.target.value.match(/\+?([78])?\d{0,10}/);
                event.target.value = inputPhone[0];
            } else if(event.target.matches('[name="user_name"]')){
                let inputName = event.target.value.match(/[а-яА-Я\s]+/);
                event.target.value = inputName[0];
            } else if(event.target.matches('[name="user_message"]')){
                let inputMessage = event.target.value.match(/[а-яА-Я\s]+/);
                event.target.value = inputMessage[0];
            }
        });
    };

    validateInputs();


    forms.forEach((form) => { 
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;

            //передаем в formData нашу форму, чтобы создать объект в кот ключ это name input'ов, 
            //а значение value input'ов: {user_name: 'блабла', user_phone: '78787', user_email: 'dsfgh@ds.com'} 
            const formData = new FormData(form);

            //создаем чистый пустой объект и в него передаем все то, что было в инпутах formData
            //let userData = {};
            //val - 'блабла' key - 'user_name'
            // formData.forEach((val, key) => {
            //     userData[key] = val;
            // });  

            //вызываем postData и передаем в нее body, и 2 анонимные функции
            // postData(body, () => {
            //     statusMessage.textContent = successMessage;
            // }, (error) => {
            //     statusMessage.textContent = errorMessage;
            //     console.error(error);
            // });

            postData(formData)
                .then((response) => {
                    if (response.status !== 200){
                        throw new Error('status network is not 200');
                    }
                    statusMessage.textContent = successMessage;
                }) //это resolve
                .catch((error) => {
                    statusMessage.textContent = errorMessage; 
                    console.error(error);
                }); //это reject
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

        // return new Promise((resolve, reject) => {

        //     const request = new XMLHttpRequest();
        //     request.open('POST', './server.php');
        //     request.setRequestHeader('Content-Type', 'application/json');
        //     request.addEventListener('readystatechange', () => {
        //         if(request.readyState !== 4) {
        //             return;
        //         }
        //         if (request.status === 200){
        //             resolve();
        //         } else {
        //             reject(request.status);              
        //         }
        //     });

        //     request.send(JSON.stringify(userData));

        //     forms.forEach((form) => {
        //         form.querySelectorAll('input').forEach((input) => {
        //             input.value = '';
        //         }); 
        //     });

        // });
        
    };


};

export default sendForm;