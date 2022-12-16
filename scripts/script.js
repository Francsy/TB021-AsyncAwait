//1. async/await con Pokémon

// Utilizando la api de Pokemons https://pokeapi.co/ y usando sólo async/await:

// Obtener un Pokemon de manera aleatoria (fetch)
// Tras obtener dicho Pokémon
// Obten su imágen correspondiente
// Obtener nombre del Pokémon
// Dibujar nombre e imágen del Pokémon en el DOM
// OJO!! Te tocará estudiar cómo funciona la API de Pokémon para encontrar la imágen. Puede que tengas que hacer más de un fetch!! (depende de la ruta de consulta que uses)

async function getPokemonRandom() {
   let resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
   let listaPokemon = await resultado.json();
   let randomPokemon = listaPokemon.results[Math.floor(Math.random() * (listaPokemon.results.length))];
   let namePokemon = randomPokemon.name;
   let urlPokemon = randomPokemon.url;

   let resultadoChosen = await fetch(urlPokemon);
   let listaChosenPokemon = await resultadoChosen.json();
   let imgPokemon = listaChosenPokemon.sprites.front_default;

   document.querySelector("#imgpokemondata").setAttribute("src", imgPokemon)
   document.querySelector("#pokemondata").innerHTML = namePokemon;
}

// 2. async/await - batalla Pokémon vs perritos
//    Usando la API de Pokémon queremos hacer una batalla particular entre perritos y Pokémons. Recordemos que la API de perritos era 'https://dog.ceo/dog-api/'.

//    Tareas:

//    Obtener de manera random la imágen de un perrito (fetch)
//    Obtener de manera random la imágen de un Pokémon (otro fetch)
//    Dibujar en el DOM la batalla. "Pikachu" vs "Pug". ¿Te imaginas?
//    Dibujar en el DOM la batalla. "Pikachu" vs "Pug". ¿Te imaginas?

async function dogPokemonBattle() {
   let resultadoDog = await fetch(`https://dog.ceo/api/breeds/image/random`)
   let imagenRandom = await resultadoDog.json();
   let imagenDog = imagenRandom.message;

   let resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
   let listaPokemon = await resultado.json();
   let randomPokemon = listaPokemon.results[Math.floor(Math.random() * (listaPokemon.results.length))];
   let urlPokemon = randomPokemon.url;

   let resultadoChosen = await fetch(urlPokemon);
   let listaChosenPokemon = await resultadoChosen.json();
   let imgPokemon = listaChosenPokemon.sprites.back_default;

   document.querySelector("#perro").src = imagenDog
   document.querySelector("#pokemon").src = imgPokemon
}

// 3. EXTRA: async/await con Rick and Morty
//    Usando la api de Rick and Morty https://rickandmortyapi.com/ y sólo async/await:

// Obtener un Personaje de manera aleatoria (fetch)
// Con los datos del personaje, obtener:
// Su imágen correspondiente
// Nombre del personaje
// Número de episodios en los que aparece
// Nombre del primer episodio + fecha en el que aparece el personaje (otro fetch)
// Dibujar los datos anteriores en el DOM
// OJO!! Te tocará estudiar cómo funciona la API de Rick and Morty

async function getYourMorty() {
   let resultadoListaPj = await fetch(`https://rickandmortyapi.com/api/character`);
   let listaPersonajes = await resultadoListaPj.json();
   let randomPersonaje = listaPersonajes.results[Math.floor(Math.random() * (listaPersonajes.results.length))]

   let imagenPersonaje = randomPersonaje.image;
   let nombrePersonaje = randomPersonaje.name;
   let numApariciones = randomPersonaje.episode.length;

   let targetPrimerEp = await fetch(randomPersonaje.episode[0]);
   let episodio1 = await targetPrimerEp.json();
   let nombreEpisodio = episodio1.name;
   let fechaEpisodio = episodio1.air_date;


   document.querySelector("#rickimg").src = imagenPersonaje;
   document.querySelector("#rickname").innerHTML = `${nombrePersonaje}`;
   document.querySelector("#ricknum").innerHTML = `Numero de apariciones: ${numApariciones}`;
   document.querySelector("#rickep").innerHTML = `Primer episodio: ${nombreEpisodio}`
   document.querySelector("#rickfecha").innerHTML = `Fecha episodio: ${fechaEpisodio}`
}


//Botones:

document.querySelector("#getpokemon").onclick = function() {
   getPokemonRandom();
   document.querySelector("#pokemonsection").style.visibility = "visible";
}

document.querySelector("#startbattle").onclick = function() {
   dogPokemonBattle();
   document.querySelector("#battlesection").style.display = "flex";
}

document.querySelector("#getmorty").onclick = function() {
   getYourMorty();
   document.querySelector("#ricksection").style.visibility = "visible";
}




