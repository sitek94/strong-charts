<script lang="ts">
  import { getExercise, getSets } from '$lib/store'
  import { page } from '$app/stores'
  import ScatterChart from '$lib/charts/ScatterChart.svelte'

  const exercise = getExercise($page.params.exerciseId)
  const sets = getSets(exercise.id)
</script>

<svelte:head>
  <title>{exercise.name}</title>
</svelte:head>

<div class="content">
  <h1>
    {exercise.name}
  </h1>

  <ScatterChart
    data={sets}
    x={d => d['date']}
    y={d => d['volume']}
    title={d => `Volume: ${d.volume}`}
  />
</div>

<style>
  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
