import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ShoppingListService} from "../../services/shopping-list";
import { Ingredient } from "../../models/ingredient";

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {

  ingredients: Ingredient[] = []
  constructor(private shoppingListService: ShoppingListService){}
  ionViewWillEnter(){
    this.loadItems()
  }
  onAddItem(form: NgForm){
    let ingredient = new Ingredient(form.value.ingredientName, form.value.amount)

    console.log(form.value.ingredientName)
    console.log(form.value.amount)
    this.shoppingListService.addItem(ingredient)

    this.loadItems()
  }

  onCheckItem(index: number){
    this.shoppingListService.removeItem(index);
    console.log(this.shoppingListService.getItems().length)
    this.loadItems()
  }
  loadItems(){
    this.ingredients = this.shoppingListService.getItems();
  }




}
