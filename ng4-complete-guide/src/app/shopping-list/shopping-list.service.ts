import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {

  ingredientChanged = new Subject();
  startedEditing = new Subject<number>();

   private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  
  getIngredient(index : number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(editingIndex: number, newIngredient) {
    this.ingredients[editingIndex] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients : Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(indexDeleted : number) {
    this.ingredients.splice(indexDeleted, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}