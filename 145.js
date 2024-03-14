let capacidad=5000;
let stock=0;




function adivinaAleatorio()
{
	var numeroAleatorio = Math.floor((Math.random()*(101-1))+1);
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
			if(contador==30)
			{
			alert('Has superado el número máximo de intentos. Se acabó');
			}
			else
			{
			alert('Ganaste');
			document.getElementById('resultado').innerHTML = "Número aleatorio = " + numeroAleatorio;
			document.getElementById('contador').innerHTML = "Número aleatorio = " + contador;
			}
		}	
	
}

function cargarsilo(){
	let valor = Number(prompt('Ingresar carga en Tn:'));
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
    if(total>capacidad){
		result01=total-capacidad;
        alert("El Silo supera su capacidad maxima por: "+ result01);
    }
    else{
        stock=total;
        alert("Se ingreso la cantidad de "+nro+"\n"+"Se Total en Silo: "+stock);

    }
}



function calculoareatriangulo(){
	let varBase = Number(prompt('Ingresar la base del triangulo:'));
	let varAltura = Number(prompt('Ingresar la altura de un triangulo: '));
	let varSuerf=(varAltura*varBase)/2;
	alert("La base es: "+varBase+"\n"+"La altura es: "+varAltura+"\n"+"El area de un triangulo rectangulo es: "+varSuerf);

}

function promediodosnros(){
	let varNro1 = Number(prompt('Ingresar 1º numero:'));
	let varNro2 = Number(prompt('Ingresar 2º numero'));
	let varPromedio=(varNro1+varNro2)/2;
	alert("El promedio es: "+varPromedio);
}

function nromaximo(){
	let varMaximo=0;
	let varNro1 =0;
	let varContar=0;
	do{
	varNro1=Number(prompt('Ingresar un numero:'));
	if (varNro1>varMaximo){
		varMaximo=varNro1;
		}
	varContar++;
}while(varContar<3);
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