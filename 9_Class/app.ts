class Carro {
    marca: string;
    aro: number;
    constructor(marca: string, aro: number){
        this.marca = marca;
        this.aro = aro;
    }
    verificarAro(){
        return `O aro do carro é $(this.arco)`;
    }
}

let ferrari = new Carro("Ferrari", 20);
console.log(ferrari);