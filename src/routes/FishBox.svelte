<script lang="ts">
    import type { Fish } from "./fish";

    export let fish: Fish;
</script>

<div>
    <input type="checkbox" bind:checked={fish.found} />
    <span class="fishName {fish.rarity}">{fish.name}</span>
    {#if !fish.found}
        {#if fish.weird}
            ({fish.customText})
        {:else}
            ({fish.schools.join(", ")})
        {/if}
    {/if}
</div>

<style>
    .fishName.Common {
        color: #fff;
    }
    .fishName.Uncommon {
        color: #1eff00;
    }
    .fishName.Rare {
        color: #0070dd;
    }
</style>
