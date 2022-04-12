import type { CsvRow, ExerciseSet } from './types'

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

export function mapCsvRowToExerciseSet(row: CsvRow): ExerciseSet {
  const exerciseName = row['Exercise Name']
  const reps = +row['Reps']

  // Weight in CSV has "7,5" format, convert it to 7.5
  const weight = +row['Weight'].replace(',', '.')

  return {
    date: new Date(row['Date']),
    workoutName: row['Workout Name'],
    exerciseName,
    exerciseId: slugify(exerciseName),
    reps,
    weight,
    weightUnit: row['Weight Unit'],
    volume: calcVolume({ reps, weight }),
  }
}

function slugify(name: string) {
  return (
    name
      .toLowerCase()
      // Replace whitespace with dash
      .replace(/\s/g, '-')
      // Remove everything that is not a letter or number
      .replace(/[^a-z0-9-]/g, '')
  )
}
