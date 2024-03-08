let value =document.querySelectorAll('.numbers')

value.forEach((value)=>{
    let startValue = 0;
    let endValue = value.getAttribute('data-val');
    let result = setInterval(function(){
        startValue +=5;
        value.textContent = startValue

        if(startValue == endValue){
            clearInterval(result);
        }
    })

}) 