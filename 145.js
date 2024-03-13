let capacidad=5000;
let stock=0;




function adivinaAleatorio()
{
	var numeroAleatorio = Math.floor((Math.random()*(101-1))+1);
	/*alert(numeroAleatorio);*/
	/*document.getElementById('resultado').innerHTML = "Número aleatorio = " + numeroAleatorio;*/
	var contador = 1;
	var respuesta = prompt('Introduzca un numero del 1 al 100');
	while(Number(respuesta)!==numeroAleatorio && contador<30 && Number(respuesta)!=0)  //Number(respuesta)
	{
		if(respuesta<numeroAleatorio){
			respuesta = prompt('El número ingresado es menor');
		}
		else
		{
			respuesta = prompt('El número ingresado es mayor');
		}
		
		contador++;
		document.getElementById('contador').innerHTML = 'Intentos = ' + contador;
	}

		if(respuesta!=null)
		{
		/*contador++;*/
		/*document.getElementById('contador').innerHTML = 'Intentos = ' + contador;*/
			if(contador==30)
			{
			alert('Has superado el número máximo de intentos. Se acabó');
			}
			else
			{
			alert('Ganaste');
			document.getElementById('resultado').innerHTML = "Número aleatorio = " + numeroAleatorio;
			document.getElementById('contador').innerHTML = "Número aleatorio = " + contador;
		/*numeroAleatorio=0;
		contador=0;
		respuesta=-1;*/
				/*location.reload();*/
			}
		}	
		/*else
		{
		break;
		}*/
	
}

function cargarsilo(){
	let valor = Number(prompt('Ingresar carga en Tn:'));
	/*do{*/
	while(valor!=0){
		if(valor!=0){
			silo1(valor);
		}
		valor=Number(prompt("Ingrese carga en Tn:"));
	}
}






function silo1(nro){
	let result01=0;
    let total=stock+nro;
	alert(total);
	alert(stock);
	alert(nro);
    if(total>capacidad){
		result01=total-capacidad;
        alert("El Silo supera su capacidad maxima por: "+ result01);
    }
    else{
        stock=total;
        alert("Se ingreso la cantidad de "+nro);

    }
}



function calculoareatriangulo(){
	let varBase = Number(prompt('Ingresar la base del triangulo:'));
	let varAltura = Number(prompt('Ingresar la altura de un triangulo: '));
	let varSuerf=(varAltura+varBase)/2;
	alert("El area de un triangulo rectangulo es: "+varSuerf);

}

function promediodosnros(){
	let varNro1 = Number(prompt('Ingresar 1º numero:'));
	let varNro2 = Number(prompt('Ingresar 2º numero'));
	let varPromedio=(varNro1+varNro2)/2;
	alert("El promedio es: "+varPromedio);
}

function nromaximo(){
	let varNro1 = Number(prompt('Ingresar 1º numero:'));
	let varNro2 = Number(prompt('Ingresar 2º numero'));
	let varNro3 = Number(prompt('Ingresar 2º numero'));
	let varMaximo=0;
	if (varNro1>varNro2){
		varMaximo=varNro1;
	}else{
		varMaximo=varNro2;
	}

	if(varMaximo<varNro3){
		varMaximo=varNro2;
	}
	alert("El valor maximo es: "+varMaximo);
}

function calcularimc(){
	let varNro1 = Number(prompt('Ingresar peso en Kg:'));
	let varNro2 = Number(prompt('Ingresar la altura en metros:'));
	let varIMC=0;
	let varAltura=varNro2*varNro2;
	varIMC=varNro1/varAltura;
	varIMC=Number(varIMC.toFixed(2));
	alert("El IMC es: "+varIMC);
}