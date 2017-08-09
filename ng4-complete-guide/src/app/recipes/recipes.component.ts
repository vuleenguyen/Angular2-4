import { Component, OnInit, DoCheck } from '@angular/core';
import { Recipe } from "./recipe.model";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "./recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  ngOnInit() {
  }

}
