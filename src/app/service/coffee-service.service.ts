import { Products } from './../components/homepage/Products';
import { Favourites } from './../interface/favourites';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeServiceService {

  constructor() { }

  Favourites(fav: Favourites) {
    var favourites = JSON.parse(localStorage.getItem('Favourites') || '');
    favourites.push(fav);
    localStorage.setItem('Favourites', JSON.stringify(favourites));
  }

}
