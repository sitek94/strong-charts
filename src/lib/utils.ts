export function calcVolume({ reps, weight }: { reps: number; weight?: number }) {
  /**
   * Return only `reps` for bodyweight exercises, maybe in the future we'll add a base weight, or
   * something like that.
   */
  if (!weight) {
    return reps
  }

  return reps * weight
}
