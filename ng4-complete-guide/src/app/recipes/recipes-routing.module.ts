import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

const recipesRouting: Routes = [
     {
        path: '', component: RecipesComponent, 
            children: [
                {path: '', component: RecipeStartComponent},
                {path: 'new', canActivate: [AuthGuard],  component: RecipeEditComponent, },
                {path: ':id', component: RecipeDetailComponent},
                {path: ':id/edit', canActivate: [AuthGuard] ,  component: RecipeEditComponent, }
            ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(recipesRouting)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {

}