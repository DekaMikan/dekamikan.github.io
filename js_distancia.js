function calcular_distancia(){
	var cm = prompt("Porfavor ingrese un numero para sacar su distancia en kilómetros, metros y milímetros.");
	cm = parseFloat(cm)
	mlts=cm*10;
	mts=cm/100;
	km=cm/100000;
		document.getElementById("distancia").innerHTML ="<p>La distancia de "+cm+" convertida son: <br>"
		+"En kilometros equivale a: "+km +"<br>"
		+"En metros equivale a: "+mts +"<br>"
		+"En milimetros equivale a: "+mlts+"</p>";

}