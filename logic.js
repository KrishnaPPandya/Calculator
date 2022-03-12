let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
screenValue = '';

for(items of buttons)
{
    items.addEventListener('click',(e)=>{
        buttontext = e.target.innerText;
        console.log(buttontext);
        if(buttontext == 'X')
        {
            buttontext = '*';
            screenValue +=buttontext;
            screen.value = buttontext;
        }
        else if(buttontext == 'C')
        {
            screen.value = '';
            screenValue = '';
        }
        else if(buttontext == '=')
        {
            screen.value = eval(screenValue);
        }
        else if(buttontext == '%')
        {
            buttontext ='/';
            screen.value+=buttontext;
            screenValue +=buttontext;

        }
        else{
            screen.value+=buttontext;
            screenValue +=buttontext;
        }
    })

}