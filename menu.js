const nav = document.querySelector(' .nav');
const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active',window.scrollY >0)
    })

    menu_btn.addEventListener('click',() => {
        menu.classList.toggle('active')
    })

//     // Se inicializa y agrega el mapa
// function initMap() {
//     // ubicacion principal:
//     const center = {lat:-22.90642, lng:-43.18223};

//     let lugares = [
//         {lat:-22.90642, lng:-43.18223}, //Rio de Janeiro
//         {lat:-38.00042, lng:-57.5562}, //mar del plata
//         {lat:48.85341, lng: 2.3488}, //paris
//         {lat:-0.22985, lng:-78.52495}, //quito
//         {lat: 46.30991, lng: 11.02307}, //cinque terre italia
//         {lat:-34.61315, lng:-58.37723}, //buenos aires
//         {lat:-32.89084, lng:-68.82717}, //mendoza
//         {lat: 23.634501, lng: -102.552784}, //Mexico
//         {lat:51.51279, lng:-0.09184} //Londres
//     ];
//     // El mapa centrado en la coordenada principal
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 2,
//       center: center,
//     });

//      // Recorre el arreglo lugares
//     for (let i = 0; i < lugares.length; i++) {
//         const marker = new google.maps.Marker({
//             position: lugares[i],
//             map: map,
//           });
        
//     }
   
//   }
//   window.initMap = initMap;



//inicializo mapa
let map;
let markers = [];

let lugares = [
	{name: "Rio de Janeiro", lat:-22.90642, lng:-43.18223}, //Rio de Janeiro
	{name: "Mar del Plata", lat:-38.00042, lng:-57.5562}, //mar del plata
	{name: "Paris", lat:48.85341, lng: 2.3488}, //paris
	{name: "Quito", lat:-0.22985, lng:-78.52495}, //quito
	{name: "Cinque terre", lat: 46.30991, lng: 11.02307}, //cinque terre italia
	{name: "Buenos Aires", lat:-34.61315, lng:-58.37723}, //buenos aires
	{name: "Mendoza", lat:-32.89084, lng:-68.82717}, //mendoza
	{name: "Mexico", lat: 23.634501, lng: -102.552784}, //Mexico
	{name: "Londres", lat:51.51279, lng:-0.09184} //Londres
];

//Funcion que al hacer click en lista de ciudad abre la window de cada ciudad

const setListener = ()=>{
	document.querySelectorAll(".ciudad__nombre").forEach((ciudadName, index)=>{
		ciudadName.addEventListener("click", ()=>{
			google.maps.event.trigger(markers[index], "click")
		})
	})
}

const displayListaCiudades = () =>{
	let ciudadHTML = "";
	lugares.forEach(ciudad=>{
		ciudadHTML += `<h4 class = "ciudad__nombre"> ${ciudad.name}</h4>`
	})
	document.getElementById("nombres__ciudades").innerHTML = ciudadHTML;
}

//crea un marcador con la pos que recibio
const createMarker = (coord,name)=>{
	let texto = `<h3>${name}</h3>`
	const marker = new google.maps.Marker({
		position: coord,
		map:map,
	})
	google.maps.event.addListener(marker, "click", ()=>{
		infoWindow.setContent(texto);
		infoWindow.open(map, marker)
	})
	markers.push(marker)
}

//creo funcion que accede al arreglo lugares y para cada obj del arreglo extrae lat, lng y nombre 
// bounds --> limite que se adapta y optimiza el mapa dependiendo de las ubicaciones
const createLocationMarkers = () =>{
	let bounds = new google.maps.LatLngBounds(); //limite
	lugares.forEach(ciudad=>{
		let coord = new google.maps.LatLng(ciudad.lat, ciudad.lng) //paso lat y lng de cada ciudad del arreglo lugares
		let name = ciudad.name; //accedo al nombre de cada ciudad
		bounds.extend(coord) //contiene las coordenadad de cada marcador
		createMarker(coord, name);
		map.fitBounds(bounds);

	})
}


function initMap(){
	let mdp = {lat:-38.00042, lng:-57.5562}; //mapa se centra en mar del plata
	map = new google.maps.Map(document.getElementById("map"),{
		center: mdp,
		zoom: 3,
	})
	createLocationMarkers();

	
	infoWindow = new google.maps.InfoWindow();
	displayListaCiudades();
	setListener();

	
	
}

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
  