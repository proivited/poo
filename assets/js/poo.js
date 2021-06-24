class Pokemon {

    name = ""; //se declaran los atributos de la clase
    type = "";
    evolutions = [];

    /*constructor(){ //se pueden crear vacios para poder llamar objetos sin tantas caracteristicas

    }

    constructor(name){
        this.name = name;
       
    }

    constructor(name,type){ //se puede modificar el numero de elementos conservando el nombre
        this.name = name;
        this.type = type;
    }*/

   // constructor(name = 'Charmander', type = 'Fuego', evolutions = []){ //se asiganan los atributos que vamos a recibir por aprametros
    constructor(name, type, evolutions){     //lo comentado de arriba nos da valores predefinidos
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
    }

    attack(){
        return `${this.name}, esta atacando`;
    }

    evolve(evolution = 0){
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puedo evoluvionar";

        if(EVOLVE){
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }
        return message;
    }

}

const charmander = new Pokemon('Charmander','Fuego', ['Charmaleon','Charizard']);
/*const bolbasur = new Pokemon('Charmander','Fuego');
const pikachu = new Pokemon('Charmander');
const dito = new Pokemon();*/
//charmander.evolve();
//harmander.evolve(10);//ejemplo esta no existe por eso tenemos un || para que no falle

console.log(charmander.name);
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(charmander.name);

