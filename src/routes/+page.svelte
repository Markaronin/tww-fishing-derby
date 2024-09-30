<script lang="ts">
    import "../app.css";

    import { browser } from "$app/environment";
    import {
        defaultFish,
        locations,
        poolLocations,
        pools,
        type Fish,
    } from "./fish";
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
                    parsedValue.forEach(
                        (found, i) => (loadedFish[i].found = found),
                    );
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
    <h3>
        {zone}
        ({fish
            .filter((f) => !f.found)
            .filter(
                (f) =>
                    f.schools.some((s) => poolLocations(s).includes(zone)) ||
                    f.name === "Cursed Ghoulfish" ||
                    (f.name === "Awoken Coelacanth" && zone === "Azj-Kahet"),
            ).length}) ({pools
            .filter((pool) => poolLocations(pool).includes(zone))
            .filter((pool) =>
                fish.some((f) => !f.found && f.schools.includes(pool)),
            )})
    </h3>
{/each}
<hr />

<h1>Pools</h1>
{#each pools as pool}
    {#if fish.filter((f) => !f.found).some((f) => f.schools.includes(pool))}
        <h3 class="poolTitle">{pool}</h3>
        <ol class="poolFishList">
            {#each fish as f}
                {#if !f.found && f.schools.includes(pool)}
                    <FishBox bind:fish={f} />
                {/if}
            {/each}
        </ol>
    {/if}
{/each}

<h1>Weird fish</h1>
{#each fish as f}
    {#if !f.found && f.weird}
        <FishBox bind:fish={f} />
    {/if}
{/each}
<hr />

<h1>
    Found Fish <button
        on:click={() => {
            fish = fish.map((f) => ({ ...f, found: false }));
        }}>Reset</button
    >
</h1>
{#each fish as f}
    {#if f.found}
        <FishBox bind:fish={f} />
    {/if}
{/each}

<style>
    .poolTitle {
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .poolFishList {
        margin-top: 0px;
        margin-bottom: 0px;
    }
</style>
