const nav = document.querySelector(' .nav');
const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active',window.scrollY >0)
    })

    menu_btn.addEventListener('click',() => {
        menu.classList.toggle('active')
    })

    // Se inicializa y agrega el mapa
function initMap() {
    // ubicacion principal:
    const center = {lat:-38.00042, lng:-57.5562};

    let lugares = [
        {lat:-38.00042, lng:-57.5562},
        {lat:-34.61315, lng:-58.37723},
        {lat:-32.89084, lng:-68.82717},
        {lat: -0.1920852525324805, lng: -78.50612664454852},
        {lat:-22.904041770908364, lng:-43.207422019644596}
    ];
    // El mapa centrado en la coordenada principal
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: center,
    });

     // Recorre el arreglo lugares
    for (let i = 0; i < lugares.length; i++) {
        const marker = new google.maps.Marker({
            position: lugares[i],
            map: map,
          });
        
    }
   
  }
  window.initMap = initMap;

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
  