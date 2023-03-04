
import { createRouteStore, type Route, type RouteStore } from 'svelte-store-router'
import type { ViewId } from '../components/views/map/DesktopTabs.svelte';

type CustomRouteStore = RouteStore<{ query: { filterWords?: string, view?: ViewId } } & Route>

export const routeStore: CustomRouteStore = createRouteStore({
  delay: 100,
  queryClean: true,
  fragmentClean: true
})

export type FilterWords = string[]


export const getQueryStringArray = (str?: string) => {
  if (!str) {
    return [];
  }
  const regex = /\[(.*?)\]/;
  const matches = str.match(regex);

  if (!matches) {
    return [];
  }

  const words = matches[1].split(',');
  return words.filter(word => word.length > 0)
};

export const arrayToStringArray = (arr?: string[]) => `[${arr?.filter(word => word.length > 0).join(',') ?? ''}]`;