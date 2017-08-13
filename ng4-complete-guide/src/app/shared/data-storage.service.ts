import { Http, Headers } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Router, Route, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private recipeService: RecipeService,
                private authService: AuthService,
                private router: Router,
                private route: ActivatedRoute) {}

    storeRecipes() {
        const token = this.authService.getToken();

        const headers = new Headers({'ContentType': 'application/json'});
        return this.http.put("https://ng-recipe-book-a1ce5.firebaseio.com/recipes.json?auth=" + token, this.recipeService.getRecipes()
            , {headers: headers})
            .map(
                (response) => {
                    return response.json();
                }
            );
    }

    getRecipes() {

        const token = this.authService.getToken();

        this.http.get("https://ng-recipe-book-a1ce5.firebaseio.com/recipes.json?auth=" + token)
                        .map(
                            (response) => {
                                const recipes: Recipe[] = response.json()
                                for(let recipe of recipes) {
                                    if(!recipe['ingredients']) {
                                        recipe.ingredients = [];
                                    }
                                }
                                return recipes;
                            }
                        )
                        .subscribe(
                            (recipes: Recipe[]) => {
                                this.recipeService.setRecipes(recipes);
                                this.router.navigate(['../'], {relativeTo: this.route});
                            }
                        );
    }
}