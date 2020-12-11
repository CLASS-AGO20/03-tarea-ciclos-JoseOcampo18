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

    obtenerImpares(numero1, numero2){
        let x;
        let impares = "";
        let y;
        let c = ",";
        let control;
        let control2;
        if (numero1 >= numero2){
            x = numero1;
            control = numero1;
            control2 = numero2;
        }
        else {
            x = numero2;
            control = numero2;
            control2 = numero1;
        }
        do{
            if(x % 2 !== 0){
                y = x + "";
                impares = impares + y + c;
            }
            x--;
        }while(x <= control && x >= control2)
        return impares.substring(0, impares.length - 1);
    }

}


let app = new App();

