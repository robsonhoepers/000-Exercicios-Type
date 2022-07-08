    
    var btConverter = document.getElementById("idBtConverter") as HTMLButtonElement;
    var saida =  document.getElementById("idOut") as HTMLOutputElement  
    let temperaturaC
    let temperaturaF
    let temperaturaK
      
    
    btConverter.onclick = function converter(){
        let valorTemp = (document.getElementById("idValorTemp") as HTMLInputElement); 
        const opTKelvin = document.getElementById("idTKelvin") as HTMLInputElement;
        const opTCelsius = document.getElementById("idTCelsius")as HTMLInputElement;
        const opTFahrenheit = document.getElementById("idTFahrenheit")as HTMLInputElement;
           
        
        
        
    

        if (opTKelvin.checked) {
             
           //let tempK = converterKelvin(Number(valorTemp.value))
            console.log(opTKelvin);
            
             
            
        }else if (opTCelsius.checked) {
            console.log(opTCelsius);
            //temperaturaK = (valorTemp + 273).toFixed(2)
            //temperaturaF = ((valorTemp * 1.8) + 32).toFixed(2)
          // console.log(temperaturaK + "° Kelvin; " + temperaturaF + "° Fahrenheit");
            
        } else if (opTFahrenheit.checked) {
           // console.log(opTFahrenheit);
           // temperaturaK = ((((valorTemp - 32) * 5)/9) + 273).toFixed(2)
            //temperaturaC = ((valorTemp - 32) / 1.8).toFixed(2)
            //console.log(temperaturaK + "° Kelvin; " + temperaturaC + "° Celsius" );
             
        }

            
    }

    //function converterKelvin(valorTemp:Number) : number {
    
       // temperaturaC = (valorTemp - 273).toFixed(2)
       // temperaturaF = (((valorTemp - 273) * 1.8) + 32).toFixed(2)
       // console.log(temperaturaC + "° Celsius; "  + temperaturaF + "° Fahrenheit")
        //return temperaturaC
    //}
