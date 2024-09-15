<script lang="ts">
  import type { Fish } from "./fish";

  export let fish: Fish;
</script>

<div>
  <input type="checkbox" bind:checked={fish.found} />
  {fish.name}
</div>
