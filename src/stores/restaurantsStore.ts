import { derived, writable, type Writable } from 'svelte/store';
import restaurantsData from "../data/restaurants.json"
import { getQueryStringArray, routeStore } from './routeStore';

export interface Restaurant {
  name: string,
  address: string,
  lon: number;
  lat: number;
  websiteLink: string;
  menuLink?: string;
  googleLink?: string;
  categoryArray: string[];
  keywordArray: string[];
  lunchTypeArray: string[];
}

const createRestaurantsStore = (restaurants: Restaurant[]): Writable<Restaurant[]> => {
  const { set, update, subscribe } = writable<Restaurant[]>(restaurants);
  return {
    set,
    update,
    subscribe,
  }
};

export const restaurants = createRestaurantsStore(restaurantsData)

export const filteredRestaurants = derived<
  [typeof routeStore, Writable<Restaurant[]>],
  Restaurant[]
>(
  [routeStore, restaurants],
  ([$route, $restaurants]) => {
    return $restaurants.filter((restaurant) => {
      const filterArray = getQueryStringArray($route.query.filterWords)
      const isEmptyFilter = filterArray.length === 0 || !filterArray
      const hasKeywords = restaurant.keywordArray.find((word) => filterArray.includes(word))
      const hasCategory = restaurant.categoryArray.find((word) => filterArray.includes(word))
      return isEmptyFilter || hasKeywords || hasCategory
    }
    );
  });

export const keywords = [...new Set(restaurantsData.map(restaurant => restaurant.keywordArray).flat())].sort()
export const categories = [...new Set(restaurantsData.map(restaurant => restaurant.categoryArray).flat())].sort()

export const restaurantKeywordsAndCategories = [...categories, ...keywords]