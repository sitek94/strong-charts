import { browser } from '$app/env'

export function getItem<T>(key: string, defaultValue?: T) {
  if (!browser) {
    return defaultValue || null
  }

  const json = window.localStorage.getItem(key) as string | null
  if (json) {
    return JSON.parse(json) as T
  }

  if (defaultValue) {
    return defaultValue
  }

  return null
}

export function setItem<T>(key: string, value: T) {
  if (!browser) {
    return
  }
  localStorage.setItem(key, JSON.stringify(value))
}
