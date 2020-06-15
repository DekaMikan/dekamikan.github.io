function calcular_factorial(){
	var num = prompt("Porfavor ingrese un numero para sacar su factorial");
	num = parseFloat(num)
	var total = 1;

		for(var i = 1; i <= num; i++){
			total = total * i;
		}
		document.getElementById("factorial").innerHTML ="El factorial del numero es "+total;

}