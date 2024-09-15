<script lang="ts">
  import "../app.css";

  import { browser } from "$app/environment";
  import { defaultFish, locations, pools, type Fish } from "./fish";
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
          parsedValue.length === loadedFish.length &&
          parsedValue.every((v) => typeof v === "boolean")
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

<h1>Zones</h1>
{#each locations as zone}
  <div>{zone}</div>
{/each}
<hr />

<h1>Pools</h1>
{#each pools as pool}
  <div>{pool}</div>
{/each}
<hr />

<h1>Weird fish</h1>
{#each fish as f}
  {#if !f.found && f.weird}
    <FishBox bind:fish={f} />
  {/if}
{/each}
<hr />

<h1>Found Fish</h1>
{#each fish as f}
  {#if f.found}
    <FishBox bind:fish={f} />
  {/if}
{/each}
