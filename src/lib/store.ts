import { get, writable, derived } from 'svelte/store'
import { getExerciseSets, setExerciseSets } from '$lib/local-storage'

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

export const exerciseSets = writable(getExerciseSets())

exerciseSets.subscribe(value => {
  setExerciseSets(value)
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
    const exercise: Exercise = { id: exerciseId, name: exerciseName }
    return [...acc, exercise]
  }, [] as Exercise[])
})

export function getExercise(id: Exercise['id']): Exercise {
  const exercisesStore = get(exercises)
  return exercisesStore.find(exercise => exercise.id === id)
}

export function getSets(exerciseId: Exercise['id']): ExerciseSet[] {
  const exerciseSetsStore = get(exerciseSets)
  return exerciseSetsStore.filter(set => set.exerciseId === exerciseId)
}
