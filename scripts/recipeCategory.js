var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//TODO
//Make RecipeCategory inherit from BaseRecipeCategory
//HINT: Use the "extends" keyword
var RecipeCategory = (function (_super) {
    __extends(RecipeCategory, _super);
    function RecipeCategory(name, foodGroup, description, image) {
        _super.call(this, name, foodGroup);
        this.description = description;
        this.image = image;
        this.description = description;
        this.image = image;
    }
    return RecipeCategory;
})(BaseRecipeCategory);
//# sourceMappingURL=recipeCategory.js.map