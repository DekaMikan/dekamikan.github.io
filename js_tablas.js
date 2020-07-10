function calcular_for(){
var mult;
var owo="";
		for(var i = 1; i <= 10; i++){
			for (var j = 1; j <= 10; j++){
				mult=i*j;
				owo+="<p>"+i+"x"+j+"="+mult+"</p>";
				document.getElementById("for").innerHTML ="<p>"+owo+"</p>";
			}
		}
}

function calcular_while(){
var mult;
var owo="";
var i=1;
var j=1;
		while(i<=10){
			while(j<=10){
			mult=i*j;
			owo+="<p>"+i+"x"+j+"="+mult+"</p>";
			document.getElementById("while").innerHTML ="<p>"+owo+"</p>";
			j++;
			}
			j=1;
			i++;
		}
}

function calcular_dowhile(){
var mult;
var owo="";
var i=1;
var j=1;
		do{
			do{
				mult=i*j;
				owo+="<p>"+i+"x"+j+"="+mult+"</p>";
				document.getElementById("dowhile").innerHTML ="<p>"+owo+"</p>";
				j++;
			}while(j<=10);
			j=1;
			i++;
		}while(i<=10);
}