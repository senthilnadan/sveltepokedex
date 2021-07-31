import { writable } from "svelte/store";

export const pokemon = writable([])

const fetchpokemon = async (num) => {
const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
const res = await fetch(url);
const data = await res.json();
const loadedPokemon = data.results.map((data, index) => {
return{
    name: data.name,
    id: index + 1   ,
    image: `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index+1}.png`
  } ;
});


pokemon.set(loadedPokemon);


}

fetchpokemon(150);

//setTimeout(() => {fetchpokemon(2)}, 3000)