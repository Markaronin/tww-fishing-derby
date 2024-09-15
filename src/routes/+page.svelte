<script lang="ts">
  import { browser } from "$app/environment";
  import { defaultFish, type Fish } from "./fish";
  import FishBox from "./FishBox.svelte";

  const storageKey = "FoundFish";

  function loadFish(): Fish[] {
    let loadedFish = structuredClone(defaultFish);

    if (browser) {
      const rawValue = localStorage.getItem(storageKey);
      if (rawValue !== null) {
        const parsedValue = JSON.parse(rawValue);
        if (
          Array.isArray(parsedValue) &&
          parsedValue.length === loadedFish.length
        ) {
          parsedValue.forEach((found, i) => (loadedFish[i].found = found));
        }
      }
    }

    return loadedFish;
  }

  let fish = loadFish();

  function updateFoundStore() {
    let rawValue = JSON.stringify(fish.map((f) => f.found));
    if (browser) {
      localStorage.setItem(storageKey, rawValue);
    }
  }

  $: fish, updateFoundStore();
</script>

<svelte:head>
  <title>TWW Fishing Derby Helper</title>
</svelte:head>

<h1>Unfound</h1>
{#each fish as f}
  {#if !f.found}
    <FishBox bind:fish={f} />
  {/if}
{/each}
<h1>Found</h1>
{#each fish as f}
  {#if f.found}
    <FishBox bind:fish={f} />
  {/if}
{/each}
