<script lang="ts">
  import * as d3 from 'd3'
  import Link from '$lib/Link.svelte'
  import { exerciseSets } from '$lib/store'
  import { calcVolume } from '../lib/utils'

  type Status = 'success' | 'error' | 'idle'
  let status: Status = 'idle'
  let files

  $: if (files) {
    let file = files[0]

    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      const rawText = reader.result.toString()

      // semi-colon separated values
      const scsv = d3.dsvFormat(';')

      const slugify = (name: string) =>
        name
          .toLowerCase()
          // Replace whitespace with dash
          .replace(/\s/g, '-')
          // Remove everything that is not a letter or number
          .replace(/[^a-z0-9-]/g, '')

      const rawData = scsv.parse(rawText)

      try {
        const data = rawData.map(d => {
          const exerciseName = d['Exercise Name']
          const reps = +d['Reps']

          // Weight in CSV has "7,5" format, convert it to 7.5
          const weight = +d['Weight'].replace(',', '.')

          return {
            date: new Date(d['Date']),
            workoutName: d['Workout Name'],
            exerciseName,
            exerciseId: slugify(exerciseName),
            reps,
            weight,
            weightUnit: d['Weight Unit'],
            volume: calcVolume({ reps, weight }),
          }
        })
        exerciseSets.set(data)
        status = 'success'
      } catch (e) {
        console.error(e)
        status = 'error'
      }
    }
    reader.readAsText(file)
  }
</script>

<svelte:head>
  <title>Import data</title>
</svelte:head>

<div class="content">
  {#if status === 'idle'}
    <h1>Import data</h1>
    <input type="file" accept="text/csv" bind:files />
  {/if}

  {#if status === 'success'}
    <h1>Data imported</h1>
    <Link to="exercises">Go to exercises</Link>
  {/if}

  {#if status === 'error'}
    <h1>Something went wrong</h1>
    <p>Check the console</p>
  {/if}
</div>

<style>
  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
