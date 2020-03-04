import { Injectable, Input } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  dynamicCard: User[];
  constructor() {
    this.dynamicCard = [
      { id:1,"title": "CSS Examples", "description": "Loads of copy & paste code examples. Includes backgrounds, borders, colors, gradients, CSS grid, flexbox, animations, and more.", "image": "assets/img/css-example.png" },
      { id:2,"title": "CSS References", "description": "CSS properties, functions, @-rules, data types, color values, and more — all on one page. Filter by keyword.", "image": "assets/img/css_reference.jpeg" },
      { id:3,"title": "Grid Layout Tutorial", "description": "CSS grid layout will soon be an essential skill for any front-end developer's toolkit. Check it out and see all the fuss is about.", "image": "assets/img/grid.png" }

    ];
  }

  pushCard(card)
  {
    var len = this.dynamicCard.length;
    card.id = len+1;
    this.dynamicCard.push(card);
  }

  getData(id:number):User
  {
    return this.dynamicCard.find(e=> e.id === id);
  }

  
 

  deleteProduct(id:number)
  {
    
    const i = this.dynamicCard.findIndex(e=> e.id === id);
    if(i!== -1)
    {
      
      return this.dynamicCard.splice(i,1);
    }
  }
  
}




