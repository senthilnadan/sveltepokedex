<script>
	import { pokemon } from '../stores/pokestore';
	import PokemanCard from '../components/pokemanCard.svelte';
	console.log($pokemon);

	let searchTerm = '';
	let filteredpokemon = [];

	$: {
		console.log(searchTerm);
		if (searchTerm) {
			filteredpokemon = $pokemon.filter(pokeman => pokeman.name.toLowerCase().
            includes(searchTerm.toLowerCase()));
		} else {
			filteredpokemon = [...$pokemon]
		}
	}
</script>

<svelte:head>
	<title>srirams pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex This is a Pokedex App BY SRIRAM</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
	type="text"
	placeholder="Search Pokemon"
/>

<div>
	{#each filteredpokemon as pokeman}
		<PokemanCard pokeman={pokeman} />
	{/each}
</div>
