import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(
    newName: string,
    newDestription: string,
    newImagePath: string,
    newIngredients: Ingredient[]
  ) {
    this.name = newName;
    this.description = newDestription;
    this.imagePath = newImagePath;
    this.ingredients = newIngredients;
  }
}
