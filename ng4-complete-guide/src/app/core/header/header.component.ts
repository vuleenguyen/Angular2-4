import { Component, Output, EventEmitter } from '@angular/core'
import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";
import { Recipe } from "../../recipes/recipe.model";

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