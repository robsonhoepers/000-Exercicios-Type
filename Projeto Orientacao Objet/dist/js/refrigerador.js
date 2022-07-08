"use strict";
class Refrigerador {
    constructor(numPortas, volume, altura, voltagem, cor, tipoTec, isInverse, modelo, marca, tempCongelador, tempRefrigerador) {
        this.numPortas = numPortas;
        this.volume = volume;
        this.altura = altura;
        this.voltagem = voltagem;
        this.cor = cor;
        this.tipoTec = tipoTec;
        this.isInverse = isInverse;
        this.modelo = modelo;
        this.marca = marca;
        this.tempCongelador = tempCongelador;
        this.tempRefrigerador = tempRefrigerador;
    }
    ajustarTemperaturaRefrigerador(tempNova) {
        this.tempRefrigerador = tempNova;
    }
    ajustarTemperaturaCongelador(tempNova) {
        this.tempCongelador = tempNova;
    }
    acionarModoTurbo(tempo) {
        this.tempCongelador = this.tempCongelador - 10;
        setTimeout(() => {
            this.tempCongelador = this.tempCongelador - 10;
        }, (tempo * 60 * 1000));
    }
}
