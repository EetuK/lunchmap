import { writable } from "svelte/store";

export type FilterWords = string[]

export const filterWords = writable<FilterWords>([]);
