<script lang="ts">
  import * as d3 from 'd3'
  import Link from '$lib/Link.svelte'
  import { exerciseSets } from '$lib/store'
  import { mapCsvRowToExerciseSet } from '$lib/utils'
  import Alert from '$lib/Alert.svelte'

  type Status = 'success' | 'error' | 'idle'
  let status: Status = 'idle'
  let message: string

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
        message = 'Your file was loaded successfully'
      } catch (e) {
        console.error(e)
        status = 'error'
        message = 'Your file could not be loaded'
      }
    }
    reader.readAsText(file)
  }

  async function useExampleData() {
    try {
      const rows = await d3.dsv(';', './example-dataset.csv')
      const data = rows.map(mapCsvRowToExerciseSet)
      exerciseSets.set(data)
      status = 'success'
      message = 'Example data was loaded successfully'
    } catch {
      status = 'error'
      message = 'Example data could not be loaded'
    }
  }
</script>

<svelte:head>
  <title>Import data</title>
</svelte:head>

<div class="content">
  <h1>Import data</h1>
  {#if status === 'success' || status === 'error'}
    <Alert {status} {message} />
  {/if}

  <h2>Import your own data</h2>
  <input type="file" accept="text/csv" bind:files />

  <h2>Or...</h2>
  <button on:click={useExampleData}>Use example dataset</button>
</div>

<style>
  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
