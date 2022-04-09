<script lang="ts">
  import { exercises } from '$lib/store'
</script>

<svelte:head>
  <title>Exercises</title>
</svelte:head>

<div class="content">
  <h1>Exercises</h1>

  <ul>
    {#each $exercises as { id, name }}
      <li>
        <a href="/exercises/{id}">{name}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
