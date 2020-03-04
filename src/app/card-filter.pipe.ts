import { User } from './user'
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'cardFilter'
})
export class CardFilterPipe implements PipeTransform{
    transform(a:User[],searchText:string):User[]{
        if(!a || !searchText){
            return a;
        }
        return a.filter(data=>
            data.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    }
}