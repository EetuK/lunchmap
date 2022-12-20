import { writable } from "svelte/store";

type LocationSettingState = 'inactive' | 'active' | 'set'

export const isSettingLocation = writable<LocationSettingState>('inactive');
export const hoveredRestaurant = writable<string | undefined>(undefined);