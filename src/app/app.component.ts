import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coffee-shop';


  sideBar() {
    var sideContainer = document.querySelector('.navbar');
    var cartContainer = document.querySelector('.cart-items-container');
    var searchInput = document.querySelector('.search-form'); 
    sideContainer?.classList.toggle('active');
    cartContainer?.classList.remove('active');
    searchInput?.classList.remove('active');
  }

  cart(){
    var sideContainer = document.querySelector('.navbar');
    var cartContainer = document.querySelector('.cart-items-container');
    var searchInput = document.querySelector('.search-form'); 
    sideContainer?.classList.remove('active');
    cartContainer?.classList.toggle('active');
    searchInput?.classList.remove('active');
  }

  searchForm() {
    var sideContainer = document.querySelector('.navbar');
    var cartContainer = document.querySelector('.cart-items-container');
    var searchInput = document.querySelector('.search-form'); 
    sideContainer?.classList.remove('active');
    cartContainer?.classList.remove('active');
    searchInput?.classList.toggle('active');
    
  }
}
