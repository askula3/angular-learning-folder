import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Thai Beef',
      'A delicious marinade for flank steak blending the flavors of crushed coriander seed, lime juice, and soy sauce. This marinade can be used well with other meats as well. Serve over rice or shredded Chinese cabbage and red pepper slices.',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8143158.jpg&q=85',
      [
        new Ingredient('tablespoons coriander seeds, coarsely cracked', 2),
        new Ingredient('cup firmly packed dark brown sugar', 1 / 2),
        new Ingredient('cup soy sauce', 1 / 4),
        new Ingredient('tablespoon lime juice', 1),
        new Ingredient('cloves garlic, minced', 2),
        new Ingredient('pinch ground ginger', 1),
        new Ingredient('pounds flank steak', 1 + 1 / 2),
      ]
    ),
    new Recipe(
      'Kadai Chicken',
      'This is one of the delicious and easiest chicken dishes I have ever made. You can increase or decrease the chile peppers according to your taste.',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3531190.jpg&w=596&h=596&c=sc&poi=face&q=85',
      [
        new Ingredient('teaspoons vegetable oil', 5),
        new Ingredient('peppers dried red chile peppers, finely chopped', 7),
        new Ingredient('eaches tomatoes, finely chopped', 5),
        new Ingredient(
          'eaches boneless chicken breasts, cut into bite-size pieces',
          4
        ),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
