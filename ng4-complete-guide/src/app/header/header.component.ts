import { Component, Output, EventEmitter } from '@angular/core'
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { DataStorageService } from "../shared/data-storage.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    
    constructor(private dataStorageService: DataStorageService, 
                private authService: AuthService) {}
    
    onSave() {
        this.dataStorageService.storeRecipes().subscribe(
            (recipes: Recipe[]) => {
                console.log(recipes);
            }
        );
    }

    onFetch() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }
}