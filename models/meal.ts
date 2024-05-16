/**
 * This interface represents a meal object.
 * It is used to define the structure of the meal object.
 *
 * @interface IMeal
 *
 * @property {string} id - The id of the meal.
 * @property {string[]} categoryIds - The ids of the categories the meal belongs to.
 * @property {string} title - The title of the meal.
 * @property {string} imageUrl - The URL of the image of the meal.
 * @property {string[]} ingredients - The ingredients of the meal.
 * @property {string[]} steps - The steps to prepare the meal.
 * @property {number} duration - The duration to prepare the meal.
 * @property {string} complexity - The complexity of the meal.
 * @property {string} affordability - The affordability of the meal.
 * @property {boolean} isGlutenFree - Indicates if the meal is gluten free.
 * @property {boolean} isVegan - Indicates if the meal is vegan.
 * @property {boolean} isVegetarian - Indicates if the meal is vegetarian.
 * @property {boolean} isLactoseFree - Indicates if the meal is lactose free.
 *
 */
export interface IMeal {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

/**
 * This class represents a meal object.
 *
 * @class Meal
 *
 * @property {string} id - The id of the meal.
 * @property {string[]} categoryIds - The ids of the categories the meal belongs to.
 * @property {string} title - The title of the meal.
 * @property {string} imageUrl - The URL of the image of the meal.
 * @property {string[]} ingredients - The ingredients of the meal.
 * @property {string[]} steps - The steps to prepare the meal.
 * @property {number} duration - The duration to prepare the meal.
 * @property {string} complexity - The complexity of the meal.
 * @property {string} affordability - The affordability of the meal.
 * @property {boolean} isGlutenFree - Indicates if the meal is gluten free.
 * @property {boolean} isVegan - Indicates if the meal is vegan.
 * @property {boolean} isVegetarian - Indicates if the meal is vegetarian.
 * @property {boolean} isLactoseFree - Indicates if the meal is lactose free.
 *
 */
class Meal implements IMeal {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;

  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    affordability: string,
    complexity: string,
    imageUrl: string,
    duration: number,
    ingredients: string[],
    steps: string[],
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLactoseFree: boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
