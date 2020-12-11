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

        while (i < suma) {
            i++;
            suma = suma + 1 / i;
        }
        return suma;
    }

}


let app = new App();

