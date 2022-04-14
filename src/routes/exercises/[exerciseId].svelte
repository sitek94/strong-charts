<script lang="ts">
  import { getExercise, getSets, type ExerciseSet } from '$lib/store'
  import { page } from '$app/stores'
  import ScatterChart from '$lib/charts/ScatterChart.svelte'

  import * as d3 from 'd3'

  type T = $$Generic

  const exerciseId = $page.params.exerciseId
  let innerWidth = 700
  let innerHeight = 350

  const exercise = getExercise($page.params.exerciseId)
  const sets = getSets(exerciseId)

  const xValue = (d: ExerciseSet) => d.date
  const yValue = (d: ExerciseSet) => d.volume

  const datesExtent = d3.extent(sets, xValue) as [Date, Date]

  const binGenerator = d3
    .bin<ExerciseSet, Date>()
    .value(xValue)
    .domain(datesExtent)
    .thresholds(d3.timeDays(datesExtent[0], datesExtent[1], 1))

  const binnedData = binGenerator(sets).map(bin => ({
    volume: d3.sum(bin, yValue),
    date: bin.x0,
  }))
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
      data={binnedData}
      x={d => d['date']}
      y={d => d['volume']}
      title={d => `Volume: ${d['volume']}`}
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
