import {Ingredient} from "../models/ingredient";
export class ShoppingListService{

  ingredients: Ingredient[] = []
  addItem(item: Ingredient){
    this.ingredients.push(item)

    console.log(this.ingredients.length)
  }
  addItems( items: Ingredient[] ){
    this.ingredients.push(...items);
  }
  removeItem(index: number ){
    this.ingredients.splice(index, 1);
  }
  findItem( item: Ingredient ){
    return this.ingredients.find( (ele: Ingredient) => ele == item);
  }
  getItems(){
    return this.ingredients.slice();
  }

}
