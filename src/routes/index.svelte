<script>
    import {pokemon} from "../stores/pokestore"
    console.log($pokemon)
  
</script>
<svelte:head>
    <title> srirams pokedex </title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase"> Pokedex This is a Pokedex App BY SRIRAM</h1>

{#each $pokemon as pokeman}
    <p> {pokeman.name}</p>
{/each}

