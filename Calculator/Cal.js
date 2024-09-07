let string = ""
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        try{

            if(e.target.innerHTML == '='){
                string = eval(string);
                document.querySelector('input').value = string;
            }
            else if(e.target.innerHTML == 'c'){
                string=""
                document.querySelector('input').value = string;
            }
            else if(e.target.innerHTML == 'M+'){
                let currentValue = parseFloat(document.querySelector('input').value);
                if(!NaN(currentValue))
                {
                    memory+=currentValue;
                    console.log(memory);
                    
                }

            }
            else if(e.target.innerHTML == 'M-'){
                let currentValue = parseFloat(document.querySelector('input').value);
                if(!NaN(currentValue))
                {
                    memory-=currentValue;
                    console.log(memory);
                    
                }

            }
            else{
    
                console.log(e.target);
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        }
        catch(e){
            document.querySelector('input').value = string;
        }
    })
}) 