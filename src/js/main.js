

document.querySelector('.index-button').addEventListener('click',() => {


        let pattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let input  = document.querySelector('[type="text"]'); 


        if(pattern.test(input.value)){
                document.querySelector('.boldy').innerHTML = input.value;
                document.querySelector('.outer-container-index').style.opacity = 0;
                document.querySelector('.outer-container-success').style.opacity = 1;;


        }else {
            let form      = document.querySelector('.form');
            form.style.setProperty('--validationOpacity',1);
            input.style.setProperty('--placeHolderColor','hsl(4, 100%, 67%)');
            input.style.borderColor = 'hsl(4, 100%, 67%)';
            input.style.backgroundColor = 'rgba(255, 98, 87,0.2)';
            input.style.color = 'hsl(4, 100%, 67%)';
            input.style.setProperty('--focusBorderColor','hsl(4, 100%, 67%)');
        }
});

document.querySelector('.success-button').addEventListener('click',() => {
    window.close();
});


