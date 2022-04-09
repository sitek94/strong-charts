<script lang="ts">
  import { exerciseNames } from '$lib/store'
</script>

<svelte:head>
  <title>Exercises</title>
</svelte:head>

<div class="content">
  <h1>Exercises</h1>

  <ul>
    {#each $exerciseNames as exerciseName}
      <li>
        {exerciseName}
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
