import { ADD_INGREDIENT } from "./types";

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  ingredient: ingredient,
});
