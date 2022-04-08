<script lang="ts">
  import * as d3 from 'd3'

  let files

  $: if (files) {
    let file = files[0]

    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      const rawText = reader.result.toString()
      const csvText = rawText.replace(/;/g, ',')

      const data = d3.csvParse(csvText)
      console.log(data)
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
