//TODO
//Make RecipeCategory inherit from BaseRecipeCategory
//HINT: Use the "extends" keyword
class RecipeCategory extends BaseRecipeCategory {

    constructor(name: string, foodGroup: FoodGroup[], public description: string, public image: string){
        super(name, foodGroup);
        this.description = description;
        this.image = image;
    }

    //Make the description parameter public so that TypeScript
    //automatically generates a member variable. 
    //Hint: Use the "public" keyword.

    //Within the constructor, forward the "name" and "foodGroups"
    //parameter values to the base class
    //HINT: Use the "super" keyword

} 