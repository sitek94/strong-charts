<script lang="ts">
  import * as d3 from 'd3'
  import { onMount } from 'svelte'

  const KEY = 'strong-charts_data'

  type ExerciseSet = {
    date: Date
    workoutName: string
    exerciseName: string
    reps: number
    weight: number
    weightUnit: string
  }
  let data: ExerciseSet[] = []

  onMount(() => {
    const storedData = localStorage.getItem(KEY)
    if (storedData) {
      data = JSON.parse(storedData)
    }
  })

  let files
  $: if (files) {
    let file = files[0]

    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      const rawText = reader.result.toString()
      const csvText = rawText.replace(/;/g, ',')

      const rawData = d3.csvParse(csvText)
      data = rawData.map((d) => ({
        date: new Date(d['Date']),
        workoutName: d['Workout Name'],
        exerciseName: d['Exercise Name'],
        reps: +d['Reps'],
        weight: +d['Weight'],
        weightUnit: d['Weight Unit'],
      }))
      localStorage.setItem(KEY, JSON.stringify(data))
    }
    reader.readAsText(file)
  }
</script>

<svelte:head>
  <title>Import data</title>
</svelte:head>

<div class="content">
  <h1>Import data</h1>

  <input type="file" accept="text/csv" bind:files />
</div>

<style>
  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
