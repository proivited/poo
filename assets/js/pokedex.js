class Pokedex{
    getinfo(name){
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
        .then(data => data.json())
        .then(data =>{
          /*  //desestructuracion
            const lista = ['Dragon Ball', 'Code Gess', 'Sailor Moon'];
            const [dragon, code] = lista;
            console.log(dragon, code); //recordar que estas listas se ponen como arreglo de matriz
            console.log(lista[1]);*/
            //console.log(data);
            const [DATA = null] = data;
            const MESSAGE = DATA || `El pokemon ${name} no existe`

            console.log(MESSAGE);
        })
    }
}

const POKEDEX = new Pokedex();
POKEDEX.getinfo("charmander")