import { writable } from 'svelte-local-storage-store'

export interface HomeCoordinates {
  lon: number;
  lat: number;
}

export interface Filters {
  homeCoordinates?: HomeCoordinates
  zoomLevel?: number
}

export const preferences = writable<Filters>('preferences', {
  homeCoordinates: undefined,
  zoomLevel: undefined
})

export const setHomeCoordinates = (preferencesStore: typeof preferences, homeCoordinates: HomeCoordinates) => preferencesStore.set({ ...preferencesStore, homeCoordinates })