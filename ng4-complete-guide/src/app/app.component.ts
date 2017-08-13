import { Component, OnInit } from '@angular/core';
// import { RecipeIngredientService } from "./shared/recipe-ingredient.service";
import { Ingredient } from "./shared/ingredient.model";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAk5OLVNFSbBEXDQ76b8ezrok_G0-4Pi0I",
      authDomain: "ng-recipe-book-a1ce5.firebaseapp.com"
    })
  }
}
