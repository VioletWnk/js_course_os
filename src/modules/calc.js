const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');

    const countSum = () => {
        let total = 0,
        countValue = 1,
        dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

            if(calcCount.value > 1){
                countValue += (calcCount.value - 1) / 10;
            }

            if(calcDay.value && calcDay.value < 5){
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if(typeValue && squareValue){
                total = price * squareValue * typeValue * countValue * dayValue;
            }

            const updateCount = () => {
                let count = +totalValue.textContent;
                const step = 200;

                let inc = total / step; 
                if (count < total) {
                    totalValue.textContent = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } 
                else {
                    totalValue.textContent = Math.ceil(total)
                }
            };
            updateCount();
    };

    calcBlock.addEventListener('input', (event) => {
        const target = event.target;
        if(target.matches('.calc-type') || target.matches('.calc-square') || 
        target.matches('.calc-day') || target.matches('.calc-count')){
            countSum();
        }

    });

    const validateInput = () => {

        const inputs = document.querySelector('.calc-block');
        inputs.addEventListener('input', (event) => {
            if(event.target.matches('input')){
                let inputVer = event.target.value.match(/\d+/);
                event.target.value = inputVer;
            }  
        });
    };
    validateInput();

};

export default calc;