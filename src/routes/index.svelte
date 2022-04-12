<script lang="ts">
  import * as d3 from 'd3'
  import Link from '$lib/Link.svelte'
  import { exerciseSets } from '$lib/store'
  import { mapCsvRowToExerciseSet } from '$lib/utils'

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

      const rows = scsv.parse(rawText)

      try {
        const data = rows.map(mapCsvRowToExerciseSet)
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
  <h1>Import data</h1>

  {#if status === 'idle'}
    <h2>Import your own data</h2>
    <input type="file" accept="text/csv" bind:files />
  {/if}

  {#if status === 'success'}
    <h2>Data imported</h2>
    <Link to="exercises">Go to exercises</Link>
  {/if}

  {#if status === 'error'}
    <h2>Something went wrong</h2>
    <p>Check the console</p>
  {/if}

  <h2>Or...</h2>
  <button>Use example dataset</button>
</div>

<style>
  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
