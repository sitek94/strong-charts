<script>
  import { tweened } from 'svelte/motion'

  export let cx
  export let cy

  const coords = tweened({ cx, cy }, { duration: 300 })

  $: {
    coords.set({ cx, cy })
  }
</script>

<circle r={5} cx={$coords.cx} cy={$coords.cy} />

<style>
  circle {
    fill: var(--accent-color);
  }
</style>
