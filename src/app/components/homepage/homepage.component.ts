import { Favourites } from 'src/app/interface/favourites';
import { CoffeeServiceService } from './../../service/coffee-service.service';
import { Component, OnInit } from '@angular/core';
import { Products, Menu } from './Products';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  products!: Favourites[];
  starsTotal = 5;
  starValue: any = [];
  menu!: Favourites[];

  constructor(private coffeeservice: CoffeeServiceService) { 
  }

  ngOnInit(): void {
    this.getRating();
  }

  getRating() {
    this.products = Products;
    this.menu = Menu;
  }
  
  addToFav(products: Favourites) {
    console.log("added to fav");
    this.coffeeservice.Favourites(products)
  }

  ratingSequence(num: number): Array<number> {
    return Array(num);
  }
}
