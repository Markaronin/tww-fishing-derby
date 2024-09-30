<script lang="ts">
    import type { Fish } from "./fish";

    export let fish: Fish;
</script>

<div class="fishBox">
    <input
        id="checkbox-{fish.name}"
        type="checkbox"
        bind:checked={fish.found}
        style="transform: scale(1.2);"
    />
    <label for="checkbox-{fish.name}">
        <span class="fishName {fish.rarity}">
            {fish.name}
        </span>
        {#if !fish.found}
            {#if fish.weird}
                ({fish.customText})
            {:else}
                ({fish.schools.join(", ")})
            {/if}
        {/if}
    </label>
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
    .fishBox > input,
    .fishBox > label {
        cursor: pointer;
    }
    .fishBox:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
</style>
