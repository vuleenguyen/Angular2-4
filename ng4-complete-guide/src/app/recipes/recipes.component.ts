import { Component, OnInit, DoCheck } from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  ngOnInit() {
  }

}
