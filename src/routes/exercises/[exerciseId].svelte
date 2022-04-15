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

  const binFactory = () => d3.bin<ExerciseSet, Date>().value(xValue).domain(datesExtent)

  const dailyBin = binFactory().thresholds(d3.timeDays(datesExtent[0], datesExtent[1], 1))
  const weeklyBin = binFactory().thresholds(d3.timeWeeks(datesExtent[0], datesExtent[1], 1))
  const monthlyBin = binFactory().thresholds(d3.timeMonths(datesExtent[0], datesExtent[1], 1))

  const dailyData = dailyBin(sets).map(bin => ({
    volume: d3.sum(bin, yValue),
    date: bin.x0,
  }))
  const weeklyData = weeklyBin(sets).map(bin => ({
    volume: d3.sum(bin, yValue),
    date: bin.x0,
  }))
  const monthlyData = monthlyBin(sets).map(bin => ({
    volume: d3.sum(bin, yValue),
    date: bin.x0,
  }))

  let aggregation = 'weekly'

  $: data = {
    daily: dailyData,
    weekly: weeklyData,
    monthly: monthlyData,
  }[aggregation]
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

    {#each ['daily', 'weekly', 'monthly'] as value}
      <label>
        <input type="radio" bind:group={aggregation} {value} />
        {value}
      </label>
    {/each}

    <ScatterChart
      width={innerWidth}
      {data}
      x={d => d['date']}
      y={d => d['volume']}
      title={d => `Volume: ${d['volume']}`}
    />
  {:else}
    <h1>Loading...</h1>
  {/if}
</div>

<style>
  label {
    text-transform: capitalize;
    display: block;
  }
  input {
    accent-color: var(--accent-color);
  }

  .content {
    width: 100%;
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
