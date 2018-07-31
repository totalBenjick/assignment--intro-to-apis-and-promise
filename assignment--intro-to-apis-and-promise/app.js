
//http://sepomex.icalialabs.com/api/v1/states
var API_URL= "https://restcountries.eu/rest/v2/all"
var request= superagent;
var ul= document.createElement("ul")  				//aqui estas  creando algo en el document pero necesitas un appendChild
var body = document.querySelector("body");  		//aquie estas haciendo body en var
request
	.get(API_URL)   
	.then(function(response){
		console.log(response.body);
		var todaLaInfo = response.body;
	
		todaLaInfo.forEach(function(paises){	
		var h4 = document.createElement("h4")	
		var li = document.createElement("li");
		var p = document.createElement("p")
		var img = document.createElement("img")
		var urlImagen= paises.flag
		
		
		img.src=urlImagen
		h4.textContent = paises.name; //asignarlo a un h1
		p.textContent=paises.capital;


		li.appendChild(img)
		li.appendChild(h4);
		li.appendChild(p)
		ul.appendChild(li)

		
		})	
		body.appendChild(ul);				//esto ultimo es la manera de pegar todo el ul al body
	});