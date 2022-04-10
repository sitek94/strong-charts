import type { Margin } from '$lib/charts/charts.types'

export function getInnerHeight({
  height,
  margin: { top, bottom },
}: {
  height: number
  margin: Margin
}) {
  return height - bottom - top
}

export function getInnerWidth({
  width,
  margin: { right, left },
}: {
  width: number
  margin: Margin
}) {
  return width - left - right
}
