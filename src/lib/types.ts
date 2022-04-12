export type ExerciseSet = {
  date: Date
  workoutName: string
  exerciseId: string
  exerciseName: string
  reps: number
  weight: number
  weightUnit: string
  volume: number
}

export type CsvRow = {
  Date: string
  'Workout Name': string
  'Exercise Name': string
  'Set Order': string
  Weight: string
  'Weight Unit': string
  Reps: string
  RPE: string
  Distance: string
  'Distance Unit': string
  Seconds: string
  Notes: string
  'Workout Notes': string
  'Workout Duration': string
}
