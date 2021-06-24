class Pokemon {

    #name = ""; //esta variable se vuelve privada no se puede acceder fuera gracias al # encapsular
    #type = "";
    #evolutions = [];

    
    constructor(name, type, evolutions){     
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }

    set name(value){ //sin set no puedo cambiar el valor
        this.#name = value;
    }

    set type (value){
        this.#type = value;
    }

    set evolutions(value){
        this.#evolutions = value;
    }

    get name(){ //sin get no puedo mostar el valor son metodos recordar no son atributos
        return this.#name;
    }

    get type(){
        return this.#type;
    }

    get evolutions(){
        return this.#evolutions;
    }

    attack(){
        return `${this.#name}, esta atacando`;
    }

    evolve(evolution = 0){
        const EVOLVE = this.#evolutions[evolution] || "";
        let message = "No puedo evoluvionar";

        if(EVOLVE){
            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE;
        }
        return message;
    }

}

const charmander = new Pokemon('Charmander','Fuego', ['Charmaleon','Charizard']);

console.log(charmander.name);
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(charmander.name);

//abstraccion es no saber como funciona pero saber usarlo punto.