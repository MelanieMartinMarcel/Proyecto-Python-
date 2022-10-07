const nav = document.querySelector(' .nav');
const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active',window.scrollY >0)
    })

    menu_btn.addEventListener('click',() => {
        menu.classList.toggle('active')
    })

    function check() {
        if (document.getElementById('inlineCheckbox2').checked) {
           document.getElementById("option1").disabled = false;
           document.getElementById("option2").disabled = false; 
          } 
          else {
             document.getElementById("option1").checked = false;
             document.getElementById("option2").checked = false;   
             document.getElementById("option1").disabled = true;
             document.getElementById("option2").disabled = true;   
          }
     }    

     function validarNombre() {
        let esValido = false;
        const input = document.forms['validationForm']['nombre'];
        input.willValidate = false;
        const caracteresValidos = new RegExp('^[A-Z ]+$','i');
  
        if(!input.value){
           esValido=false;
        }else{
            console.log(caracteresValidos.test(input.value));
           if (!caracteresValidos.test(input.value)){
              esValido=false;
           }else{
              esValido=true;
              console.log(true);
           }
        }
        if (!esValido){
           input.style.borderColor= 'red';
        }else{
           input.style.borderColor= 'green';
        }
        return esValido;
      }

      function validarEmail(){
        const input = document.forms['validationForm']['email'];
        var caract = document.getElementById('user-mail');
        
        var emailValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
        if( emailValido.test(caract.value) ){
            input.style.borderColor= 'green';
            return true;
        }else{
            input.style.borderColor= 'red';
            return false;
        }
    } 