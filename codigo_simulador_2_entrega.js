// DEFINICIONES CONSTANTES, VARIABLES, ARRAYS y FUNCIONES y OBJETOS

function limpiar_datos(){
    cuota1.innerText=""
    cuota2.innerText=""
    cuota3.innerText=""
    cuota4.innerText=""
    cuota5.innerText=""
};

const visa = [0,15.77,21.61,27.63,33.84];
const mastercard = [0,17.37,23.84,30.53,37.44];
  
//CAPTURO LOS DATOS TARJETA DESDE EL CUADRO DE OPCIONES Y LA MUESTRO EN UN ETIQUETA P)

const opciones = document.getElementById("dropdownOpcionesTarjetas");
const tarjeta_seleccionada = document.getElementById("tarjetaseleccionada");
opciones.addEventListener("change", ()=>{

    tarjetaseleccionada.innerText=opciones.value
    interescuota.innerText=""
    cuotaseleccionada.innerText=""
    limpiar_datos()

        if(opciones.value === "Visa"){
                   
            cuota1.innerText = "Cuota 1 -" + " Coeficiente: "+ visa[0]
            cuota2.innerText = "Cuota 2 -" + " Coeficiente: "+ visa[1]
            cuota3.innerText = "Cuota 3 -" + " Coeficiente: "+ visa[2]
            cuota4.innerText = "Cuota 4 -" + " Coeficiente: "+ visa[3]
            cuota5.innerText = "Cuota 5 -" + " Coeficiente: "+ visa[4]
        }
        
        if(opciones.value === "Mastercard"){
            cuota1.innerText = "Cuota 1 -" + " Coeficiente: "+ mastercard[0]
            cuota2.innerText = "Cuota 2 -" + " Coeficiente: "+ mastercard[1]
            cuota3.innerText = "Cuota 3 -" + " Coeficiente: "+ mastercard[2]
            cuota4.innerText = "Cuota 4 -" + " Coeficiente: "+ mastercard[3]
            cuota5.innerText = "Cuota 5 -" + " Coeficiente: "+ mastercard[4]
         }
         if(opciones.value === "Seleccionar..."){
            limpiar_datos()
         }
    }
)
const opcioncuota = document.getElementById("dropdownOpcionesCuotas")
const cuotas_seleccionada = document.getElementById("cuotaseleccionada")
let interes = 0
opcioncuota.addEventListener("change", ()=>{
    cuotaseleccionada.innerText = opcioncuota.value
    if(opciones.value === "Visa"){
        for(i=0;i<=visa.length;i++){
            if(opcioncuota.value==i){
                interescuota.innerText = visa[i-1]
                interes = visa[i-1]
            }
        }
    }
    if(opciones.value === "Mastercard"){
        for(i=0;i<=mastercard.length;i++){
            if(opcioncuota.value==i){
                interescuota.innerText = mastercard[i-1]
                interes = mastercard[i-1]
            }
        }
    }
}
)

let varvalorcuota = 0
let varvalormontointeres = 0
let varvalorinteres = 0

const valormonto = document.getElementById("montoacalcular")
    btncalcular.addEventListener("click", ()=>{
    montototal.innerText = calcular_importe(valormonto.value,interes).toFixed(2)
    varvalormontointeres = parseFloat(montototal.innerText)
    montocuota.innerText = calcular_cuota(valormonto.value,interes,opcioncuota.value).toFixed(2)
    varvalorcuota = parseFloat(montocuota.innerText)
    montointeres.innerText = calcular_interes(valormonto.value,interes).toFixed(2)
    varvalorinteres = parseFloat(montointeres.innerText)
}
)

function Guardarcalculo(itemtarjeta,itemcoeficiente,itemcuota,itemmonto,itemvalormonto,itemvalorcuota,itemvalorinteres){
    this.itemtarjeta = itemtarjeta;
    this.itemcoeficiente =itemcoeficiente;
    this.itemcuota =itemcuota;
    this.itemmonto = itemmonto;
    this.itemvalormonto = itemvalormonto;
    this.itemvalorcuota = itemvalorcuota;
    this.itemvalorinteres = itemvalorinteres;
};

btnguardar.addEventListener("click", ()=>{
const datoscalculo = new Guardarcalculo(opciones.value,interes,opcioncuota.value,parseFloat(valormonto.value),varvalormontointeres,varvalorcuota,varvalorinteres)
const Jsondatoscalculo = JSON.stringify(datoscalculo)
localStorage.setItem("datoscalculo",Jsondatoscalculo)
} )

limpiartodo.addEventListener("click",()=>{
    limpiar_todo()
})    

function calcular_importe(valor,coeficiente){
    return (valor*((coeficiente/100)+1))
}

function calcular_cuota(valor,coeficiente,cantidadcuotas){
    return valor*((coeficiente/100)+1)/cantidadcuotas
}

function calcular_interes(valor,coeficiente){
    return valor*(coeficiente/100)
}

function limpiar_todo(){
    cuota1.innerText=""
    cuota2.innerText=""
    cuota3.innerText=""
    cuota4.innerText=""
    cuota5.innerText=""
    montocuota.innerText=""
    montointeres.innerText=""
    montototal.innerText=""
    cuotaseleccionada.innerText=""
    interescuota.innerText=""
    tarjetaseleccionada=""
    dropdownOpcionesTarjetas.value="Seleccionar..."
    dropdownOpcionesCuotas.value="Seleccionar..."
    montoacalcular.value=""
    varvalorcuota = 0
    varvalormontointeres = 0
    varvalorinteres = 0
}

