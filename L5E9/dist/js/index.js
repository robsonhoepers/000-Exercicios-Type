"use strict";
let btConverter = document.getElementById("idBtConverter");
let saida = document.getElementById("idOut");
btConverter.onclick = function converter() {
    const opTKelvin = document.getElementById("idTKelvin");
    const opTCelsius = document.getElementById("idTCelsius");
    const opTFahrenheit = document.getElementById("idTFahrenheit");
    var temperatura = document.getElementById("idValorTemp");
    let valorTemp = Number(temperatura.value);
    let temperaturaC;
    let temperaturaF;
    let temperaturaK;
    if (opTKelvin.checked) {
        console.log(opTKelvin);
        temperaturaC = (valorTemp - 273).toFixed(2);
        temperaturaF = (((valorTemp - 273) * 1.8) + 32).toFixed(2);
        console.log(temperaturaC + "° Celsius; " + temperaturaF + "° Fahrenheit");
    }
    else if (opTCelsius.checked) {
        console.log(opTCelsius);
        temperaturaK = (valorTemp + 273).toFixed(2);
        temperaturaF = ((valorTemp * 1.8) + 32).toFixed(2);
        console.log(temperaturaK + "° Kelvin; " + temperaturaF + "° Fahrenheit");
    }
    else if (opTFahrenheit.checked) {
        console.log(opTFahrenheit);
        temperaturaK = ((((valorTemp - 32) * 5) / 9) + 273).toFixed(2);
        temperaturaC = ((valorTemp - 32) / 1.8).toFixed(2);
        console.log(temperaturaK + "° Kelvin; " + temperaturaC + "° Celsius");
    }
};
