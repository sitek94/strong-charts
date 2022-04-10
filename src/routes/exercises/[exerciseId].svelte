<script lang="ts">
  import { getExercise, getSets } from '$lib/store'
  import { page } from '$app/stores'
  import ScatterChart from '$lib/charts/ScatterChart.svelte'

  const exerciseId = $page.params.exerciseId
  let innerWidth = 700
  let innerHeight = 350

  const exercise = getExercise($page.params.exerciseId)
  const sets = getSets(exerciseId)
</script>

<svelte:head>
  <title>{exercise?.name}</title>
</svelte:head>

<svelte:window bind:innerHeight bind:innerWidth />

<div class="content">
  {#if exercise}
    <h1>
      {exercise.name}
    </h1>

    <ScatterChart
      width={innerWidth}
      data={sets}
      x={d => d['date']}
      y={d => d['volume']}
      title={d => `Volume: ${d.volume}`}
    />
  {:else}
    <h1>Loading...</h1>
  {/if}
</div>

<style>
  .content {
    width: 100%;
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
