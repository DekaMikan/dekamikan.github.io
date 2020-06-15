function suma(){
	var suma=0;
	var num=0;
	do{
		num = prompt("Por favor ingrese un numero positivo para sumar y un numero menor a 0 para terminar");
		num = parseFloat(num)
		suma= suma+num;
		document.getElementById("numeroP").innerHTML ="La suma de los numeros que ingreso es: "+suma;
	}while(num>0)
}