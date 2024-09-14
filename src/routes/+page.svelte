<script>
  import { fish } from "./fish";
  import FishBox from "./FishBox.svelte";
</script>

<svelte:head>
  <title>TWW Fishing Derby Helper</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>Hello, world</h1>
{#each fish as f}
  <FishBox fish={f} />
{/each}
