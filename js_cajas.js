function calcular_cajas(){
	var caja = prompt("Por favor ingrese el numero de cajas que desea colocar");
	if (caja != null) {
    	if (caja >0){
    	document.getElementById("cajas").innerHTML ="";
    	for (var i =0; i < caja; i++) {
    		if (caja <8) {
    			document.getElementById("cajas").innerHTML += "<article class='menor8'>Caja " + (i+1) + "</article>";
    	}else{
    		document.getElementById("cajas").innerHTML += "<article class='mayor8'>Caja " + (i+1) + "</article>";
    	}
    	}
	}
  }
}