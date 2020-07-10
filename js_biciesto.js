function calcular_bisiesto(){
	var num = prompt("Porfavor ingrese el año que desea saber si es bisiesto");
	num = parseFloat(num)
	if ((num % 4 == 0) && (num % 100 != 0) || (num % 400 == 0)){
        document.getElementById("bisiesto").innerHTML ="<p> El año "+num+" es bisiesto.</p>";
    }
    else{
        document.getElementById("bisiesto").innerHTML ="<p> El año "+num+" no es bisiesto.</p>";
    }

}