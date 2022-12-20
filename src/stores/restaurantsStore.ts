import { derived, writable, type Writable } from 'svelte/store';
import restaurantsData from "../data/restaurants.json"
import { filterWords, type FilterWords } from './filterStore';

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
  [Writable<FilterWords>, Writable<Restaurant[]>],
  Restaurant[]
>(
  [filterWords, restaurants],
  ([$filterWords, $restaurants]) => {
    return $restaurants.filter((restaurant) => {
      const isEmptyFilter = $filterWords?.length === 0 || !$filterWords
      const hasKeywords = restaurant.keywordArray.find((word) => $filterWords?.includes(word))
      const hasCategory = restaurant.categoryArray.find((word) => $filterWords?.includes(word))
      return isEmptyFilter || hasKeywords || hasCategory
    }
    );
  });

export const keywords = [...new Set(restaurantsData.map(restaurant => restaurant.keywordArray).flat())].sort()
export const categories = [...new Set(restaurantsData.map(restaurant => restaurant.categoryArray).flat())].sort()

export const restaurantKeywordsAndCategories = [...categories, ...keywords]