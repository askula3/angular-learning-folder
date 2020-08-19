export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(newName: string, newDestription: string, newImagePath: string) {
    this.name = newName;
    this.description = newDestription;
    this.imagePath = newImagePath;
  }
}
