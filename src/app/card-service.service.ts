import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  
  dynamicCard = [
      {"title":"CSS Examples" , "description":"Loads of copy & paste code examples. Includes backgrounds, borders, colors, gradients, CSS grid, flexbox, animations, and more." , "image":"assets/img/css-example.png"},
      {"title":"CSS References" , "description":"CSS properties, functions, @-rules, data types, color values, and more — all on one page. Filter by keyword." , "image":"assets/img/css_reference.jpeg"},
      {"title":"Grid Layout Tutorial" , "description":"CSS grid layout will soon be an essential skill for any front-end developer's toolkit. Check it out and see all the fuss is about." , "image":"assets/img/grid.png"}
   
    ];
  }

  
  

