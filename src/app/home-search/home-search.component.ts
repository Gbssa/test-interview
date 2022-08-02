import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

  }

  title = 'Github Search Users ';
  public searchText: any;
   Users = [
    { name: 'Gabriela', login: 'gabriela@github.com', description: 'Developer Java ', followers: 30, following: 100 , stars: 3, location: 'Brasil', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYZA4m-WtlIzwGYCrxJoygk-vgAR5RFImrw&usqp=CAU'},
    { name: 'Maria', login: 'maria@github.com', description: 'Developer Node ', followers: 59, following: 144 , stars: 2, location: 'Estados Unidos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp56Ik4LcOlPwxNNsoO5AqQSzS-wz3Rg3SBw&usqp=CAU'},
    { name: 'Ricardo', login: 'ricardo@github.com', description: 'Developer React', followers: 70, following: 10 , stars: 5, location: 'França', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-Uj2tp81ageGmXQJFAqJztq2COWXPh7e4Q&usqp=CAU' },
    { name: 'Matheus', login: 'matheus@github.com', description: 'Developer JS ', followers: 56, following: 18 , stars: 4 , location: 'Irlanda', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwXwnevgUIiqwo56xbGzZDs1EdeI6jQXUnQ&usqp=CAU'},
    { name: 'Simone', login: 'simone@github.com', description: 'Developer TS', followers: 87, following: 16 , stars: 5 , location: 'México',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8iZUK0oTp_HHdxKTC8Xzm2H9hFLlgCKrMQ&usqp=CAU'},
    { name: 'Marcelo', login: 'marcelo@github.com', description: 'Developer C++ ', followers: 4, following: 99 , stars: 2 , location: 'Bali', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbZmHdOJMhOsLzQRFoKH85LXXgpYGxaAZwQ&usqp=CAU'},
    { name: 'Leandro', login: 'leandro@github.com', description: 'Developer Pyhton ', followers: 3, following: 88 , stars: 1, location: 'Japão' , image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kk8z4d1gy_wzSbblObaXsrsn0TwKFBkV7g&usqp=CAU' },
    { name: 'Fátima', login: 'fatima@github.com', description: 'Developer NodeJS ', followers: 11, following: 100 , stars: 1, location: 'Argentina', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVw5bCT0wDpEK-GatKJDLeHFqVl4ARYQ0Uhw&usqp=CAU'},
    { name: 'Rayssa', login: 'rayssa@github.com', description: 'Developer AngularJS ', followers: 30, following: 89 , stars: 3, location: 'Paraguai', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyLaYCIw3aBHfCtat11WIskNAB9kI4o8EBIQ&usqp=CAU' },
    { name: 'Bruna', login: 'bruna@github.com', description: 'Developer Java ', followers: 30, following: 90 , stars: 5, location: 'Itália', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_c2hEzmseunEbITe8lhgWZ4QOMeCw2m2Adw&usqp=CAU' }
    
  ];  

}
