export default class App {

    sumatoriaSerieUno(numero){
        let suma = 1;
        for (let i = 2; i <= numero; i++){
            suma = suma + 1 / i;
        }
        return suma;
    }

    sumatoriaSerieDos(numero){
        let i = 2;
        let suma = 1;

        while (i <= numero) {
            suma = suma + 1 / i;
            i++;
        }
        return suma;
    }

    esPrimo(numero){
        let i = 2;
        do{
            if(numero % i !== 0){
                i++;
            }
            else{
                return false;
                i = numero + 1;
            }
        }while(i < numero)
        return true;
    }

    obtenerMultiplos(inicio, fin){
        let i = inicio;
        let multiplo = "";
        let x;
        do{
            if(i % 3 == 0){
                x = i + "";
                multiplo = multiplo + x;
            }
            i++;
        }while(i >= inicio && i <= fin)
        return multiplo;
    }

}


let app = new App();

