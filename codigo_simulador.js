// DEFINICIONES CONSTANTES, VARIABLES, ARRAYS y FUNCIONES

const tarjetas = ["VISA","MASTERCARD"];
const coeficiente_tarjeta_visa = [0,15.77,21.61,27.63,33.84];
const coeficiente_tarjeta_mastercard = [0,17.37,23.84,30.53,37.44];

let mensaje_calculo = "TOTALES SEGUN CUOTAS DE TARJETA: ";
let mensaje_tarjeta = "Coeficientes Tarjeta: ";
let tipo_tarjeta = "Tipos de Tarjetas: ";
let bandera_ciclo = true;
let importe;

function calcular_importe(valor,coeficiente){
    return valor+(valor*coeficiente/100)
};

function calcular_cuota(valor,coeficiente){
    return valor*coeficiente/100
};

function limpiar_datos(){
    importe = 0;
    tipo_tarjeta = "Tipos de Tarjetas: ";
    mensaje_tarjeta = "Coeficientes Tarjeta: ";
    mensaje_calculo = "TOTALES SEGUN CUOTAS DE TARJETA: ";
}

// COMIENZO DEL PROGRAMA

alert("Bienvenidos al Simulador de Coeficientes de Tarjetas de credito");

while(bandera_ciclo){
importe = prompt("Ingrese el importe a calcular: ");
importe = parseFloat(importe);
for(let i=0;i<tarjetas.length;i++){
    mensaje_tarjeta += `\n Nombre Tarjeta: ${tarjetas[i]}`
};
alert(mensaje_tarjeta);
tipo_tarjeta = prompt("Ingrese el nombre de la tarjeta segun el listado anterior: "); 
switch (tipo_tarjeta){
    case "VISA":
        for(let i=0; i < coeficiente_tarjeta_visa.length;i++){
            mensaje_calculo += `\n Coeficiente VISA ${[i+1]} Cuota: % ${coeficiente_tarjeta_visa[i]} - Importe $ ${calcular_importe(importe,coeficiente_tarjeta_visa[i])} - Valor Cuota $ ${calcular_cuota(importe,coeficiente_tarjeta_visa[i])}`
        }
    break
    case "MASTERCARD":
        for(let i=0; i < coeficiente_tarjeta_mastercard.length;i++){
            mensaje_calculo += `\n Coeficiente MASTERCARD ${[i+1]} Cuota: % ${coeficiente_tarjeta_mastercard[i]} - Importe $ ${calcular_importe(importe,coeficiente_tarjeta_mastercard[i])} - Valor Cuota $ ${calcular_cuota(importe,coeficiente_tarjeta_mastercard[i])}`
        }
    break
};
alert(mensaje_calculo);
limpiar_datos();
bandera_ciclo = confirm ("Desea continuar con el calculo de importes y cuotas de tarjetas de credito?")
}
alert ("Gracias por utilizar nuestro Software")