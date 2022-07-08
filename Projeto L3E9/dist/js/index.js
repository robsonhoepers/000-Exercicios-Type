"use strict";
var btEscolher = document.getElementById("idEscolher");
var btCalcular = document.getElementById("idCalcular");
var out = document.getElementById("idOut");
let area = 0;
btCalcular.onclick = function calcularArea() {
    const opCirculo = document.getElementById("idCirculo");
    const opRetangulo = document.getElementById("idRetangulo");
    const opTriRetangulo = document.getElementById("idTriRetangulo");
    const opTriEquilatero = document.getElementById("idTriEquilatero");
    var baseRaioLado = document.getElementById("idMedidaBase");
    var altura = document.getElementById("idMedidaSeq");
    if (opCirculo.checked) {
        let AreaCirculo = calcularRaio(Number(baseRaioLado.value));
        out.value = ` area do circulo: ${AreaCirculo}`;
    }
    else if (opRetangulo.checked) {
        let areaRetangulo = calcularRetangulo(Number(baseRaioLado.value), Number(altura.value));
        out.value = ` area do retangulo: ${areaRetangulo}`;
    }
    else if (opTriRetangulo.checked) {
        let areaTriReta = calcularTriReta(Number(baseRaioLado.value), Number(altura.value));
        out.value = ` area do Triangulo Retangulo: ${areaTriReta} `;
    }
    else if (opTriEquilatero.checked) {
        let areaTriEqui = calcularTriEquilatero(Number(baseRaioLado.value));
        out.value = ` area do Triangulo Equilatero: ${areaTriEqui} `;
    }
};
//calcular circulo
function calcularRaio(baseRaioLado) {
    let AreaCirculo = baseRaioLado * baseRaioLado * Math.PI;
    return AreaCirculo;
}
//calcualar retangulo
function calcularRetangulo(baseRaioLado, altura) {
    let areaRetangulo = baseRaioLado * altura;
    return areaRetangulo;
}
//calcular triangulo retangulo
function calcularTriReta(baseRaioLado, altura) {
    let areaTriReta = (baseRaioLado * altura) / 2;
    return areaTriReta;
}
//calcular triangulo equilateo
function calcularTriEquilatero(baseRaioLado) {
    let areaTriEqui = ((baseRaioLado * baseRaioLado) * (3 ** (1 / 2))) / 4;
    return areaTriEqui;
}
/*
function escolherFormaGeo() {
    const opCirculo = document.getElementById("idCirculo") as HTMLInputElement;
    const opRetangulo = document.getElementById("idRetangulo") as HTMLInputElement;
    const opTriRetangulo = document.getElementById("idTriRetangulo") as HTMLInputElement;
    const opTriEquilatero = document.getElementById("idTriEquilatero") as HTMLInputElement;


if (opCirculo.checked) {
    document.getElementById("idLbMedidaSeq").hidden = true
    document.getElementById("idMedidaSeq").hidden = true

    document.getElementById("idLbMedidaBase").innerText = "Raio"
} else if (opRetangulo.checked) {
    document.getElementById("idLbMedidaSeq").hidden = false
    document.getElementById("idMedidaSeq").hidden = false

    document.getElementById("idLbMedidaBase").innerText = "Base"
    document.getElementById("idLbMedidaSeq").innerText = "Altura"

} else if (opTriRetangulo.checked) {
    document.getElementById("idLbMedidaSeq").hidden = false
    document.getElementById("idMedidaSeq").hidden = false

    document.getElementById("idLbMedidaBase").innerText = "Base"
    document.getElementById("idLbMedidaSeq").innerText = "Altura"
    
} else if (opTriEquilatero.checked) {
    document.getElementById("idLbMedidaSeq").hidden = true
    document.getElementById("idMedidaSeq").hidden = true

    document.getElementById("idLbMedidaBase").innerText = "Lado"
    document.getElementById("idLbMedidaSeq").innerText = "Altura"
}


}*/ 
