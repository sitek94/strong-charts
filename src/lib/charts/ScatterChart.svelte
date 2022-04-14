<script lang="ts">
  import * as d3 from 'd3'
  import { getInnerHeight, getInnerWidth } from './charts.utils'
  import MarginConvention from './MarginConvention.svelte'
  import type { Margin } from './charts.types'
  import { format } from 'date-fns'

  type T = $$Generic

  export let width = 800
  export let height = 200
  export let margin: Margin = { top: 20, right: 20, bottom: 20, left: 50 }
  export let data: T[] = []
  export let x: (d: T) => Date
  export let y: (d: T) => number
  export let title: (d: T) => string

  $: innerHeight = getInnerHeight({ height, margin })
  $: innerWidth = getInnerWidth({ width, margin })

  $: xScale = d3
    .scaleTime()
    .domain(d3.extent(data, x) as [Date, Date])
    .range([0, innerWidth])
    .nice()

  $: yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, y)] as [number, number])
    .range([innerHeight, 0])
    .nice()

  $: xTicks = xScale.ticks(d3.timeWeek.every(1))
  $: yTicks = yScale.ticks(10)
</script>

<svg {width} {height}>
  <MarginConvention {margin}>
    <g>
      {#each xTicks as tickValue}
        <g class="tick" transform="translate({xScale(tickValue)},0)">
          <line y2={innerHeight} />
          <text style:text-anchor="middle" dy=".71em" y={innerHeight + 7}>
            {format(tickValue, 'w')}
          </text>
        </g>
      {/each}
    </g>

    <g>
      {#each yTicks as tickValue}
        <g class="tick" transform="translate(0,{yScale(tickValue)})">
          <line x2={innerWidth} />
          <text x={-10} dy=".32em" style:text-anchor="end">
            {tickValue}
          </text>
        </g>
      {/each}
    </g>

    {#each data as d}
      {#if y(d) > 0}
        <g>
          <title>{title(d)}</title>
          <circle
            cx={xScale(x(d))}
            cy={yScale(y(d))}
            r={5}
            fill="red"
            stroke="black"
            stroke-width="1"
          />
        </g>
      {/if}
    {/each}
  </MarginConvention>
</svg>

<style>
  .tick {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 0.725em;
    font-weight: 200;
  }
  .tick line {
    stroke: #333;
    opacity: 0.2;
  }
  .tick text {
    fill: #333;
    text-anchor: start;
  }
</style>
