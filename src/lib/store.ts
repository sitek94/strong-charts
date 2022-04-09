import { writable } from 'svelte/store'
import * as localStorage from '$lib/local-storage'

const KEY = 'strong-charts__exercise-sets'

type ExerciseSet = {
  date: Date
  workoutName: string
  exerciseName: string
  reps: number
  weight: number
  weightUnit: string
}

export const exerciseSets = writable(localStorage.getItem<ExerciseSet[]>(KEY, []))

exerciseSets.subscribe((value) => {
  localStorage.setItem(KEY, value)
})
