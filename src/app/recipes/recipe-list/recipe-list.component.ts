import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is just a test :D',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'Test Ahmed',
      'This is just another test :D',
      'https://www.maxpixel.net/static/photo/2x/Food-Meal-Dinner-French-Fries-Lunch-Meat-Plate-3301662.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
