<script lang="ts">
  import * as d3 from 'd3'
  import { getInnerHeight, getInnerWidth } from './charts.utils'
  import MarginConvention from './MarginConvention.svelte'
  import type { Margin } from './charts.types'

  // @ts-ignore
  type T = $$Generic

  export let width = 500
  export let height = 200
  export let margin: Margin = { top: 20, right: 20, bottom: 20, left: 20 }
  export let data: T[] = []
  export let x: (d: T) => Date
  export let y: (d: T) => number
  export let title: (d: T) => string

  const xValue = x
  const yValue = y

  $: innerHeight = getInnerHeight({ height, margin })
  $: innerWidth = getInnerWidth({ width, margin })

  $: xScale = d3
    .scaleTime()
    .domain(d3.extent(data, xValue) as [Date, Date])
    .range([0, innerWidth])
  $: yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, yValue)] as [number, number])
    .range([0, innerHeight])
</script>

<svg {width} {height}>
  <MarginConvention {margin}>
    {#each data as d, i}
      <g>
        <title>{title(d)}</title>
        <circle
          cx={xScale(xValue(d))}
          cy={yScale(yValue(d))}
          r={5}
          fill="red"
          stroke="black"
          stroke-width="1"
        />
      </g>
    {/each}
  </MarginConvention>
</svg>
