let value1 = document.querySelectorAll('.numbers')[0];
let value2 = document.querySelectorAll('.numbers')[1];
let value3 = document.querySelectorAll('.numbers')[2];

function stepResult(values, step) {
    values.forEach((value) => {
        let startValue = 0;
        let endValue = parseInt(value.getAttribute('data-val')); 
        let result = setInterval(function() {
            startValue += step;
            value.textContent = startValue;

            if (startValue >= endValue) { 
                clearInterval(result);
            }
        },100);
    });
}

stepResult([value1], 500); 
stepResult([value2], 1);
stepResult([value3], 100);
