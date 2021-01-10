const validateInput = () => {

    const inputs = document.querySelector('.calc-block');
    inputs.addEventListener('input', (event) => {
        if(event.target.matches('input')){
            let inputVer = event.target.value.match(/\d+/);
            event.target.value = inputVer;
        }  
    });
};

export default validateInput;