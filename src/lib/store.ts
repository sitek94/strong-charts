import { get, writable, derived } from 'svelte/store'
import * as localStorage from '$lib/local-storage'

const KEY = 'strong-charts__exercise-sets'

type ExerciseSet = {
  date: Date
  workoutName: string
  exerciseId: string
  exerciseName: string
  reps: number
  weight: number
  weightUnit: string
}

export const exerciseSets = writable(localStorage.getItem<ExerciseSet[]>(KEY, []))

exerciseSets.subscribe(value => {
  localStorage.setItem(KEY, value)
})

export type Exercise = {
  id: string
  name: string
}

export const exercises = derived(exerciseSets, $exerciseSets => {
  return $exerciseSets.reduce((acc, { exerciseId, exerciseName }) => {
    if (acc.find(({ id }) => id === exerciseId)) {
      return acc
    }
    return [...acc, { id: exerciseId, name: exerciseName }]
  }, [] as Exercise[])
})

export function getExercise(id: Exercise['id']) {
  const exercisesStore = get(exercises)
  return exercisesStore.find(exercise => exercise.id === id)
}
