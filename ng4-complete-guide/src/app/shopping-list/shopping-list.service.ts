import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
   ingredientChanged = new EventEmitter<Ingredient[]>();
   ingredientName = ['Apple', 'Tomatoes'];

   private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
      return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientName.push(ingredient.name);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients : Ingredient[]) {
    // this.ingredients.push(...ingredients);
    ingredients.forEach(ingredient => {
      if (this.ingredientName.indexOf(ingredient.name) === -1) {
        this.ingredients.push(ingredient);
        this.ingredientName.push(ingredient.name);
      }
    })
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}