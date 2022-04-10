import { browser } from '$app/env'
import type { ExerciseSet } from '$lib/store'

const KEY = 'strong-charts__exercise-sets'

function getItem<T>(key: string, defaultValue?: T) {
  if (!browser) {
    return defaultValue || null
  }

  const json = localStorage.getItem(key) as string | null
  if (json) {
    return JSON.parse(json) as T
  }

  if (defaultValue) {
    return defaultValue
  }

  return null
}

function setItem<T>(key: string, value: T) {
  if (!browser) {
    return
  }
  localStorage.setItem(key, JSON.stringify(value))
}

type StringifiedExerciseSet = Omit<ExerciseSet, 'date'> & { date: string }

export function setExerciseSets(sets: ExerciseSet[]) {
  setItem(KEY, sets)
}

export function getExerciseSets() {
  const sets = getItem<StringifiedExerciseSet[]>(KEY, [])
  return sets.map(({ date, ...set }) => ({
    ...set,
    date: new Date(date),
  }))
}
