import { Component, OnInit } from '@angular/core'; 
import { CardServiceService } from '../card-service.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  a=[];
 
  constructor(private service:CardServiceService) { 
    
  }

  ngOnInit() {
    this.a = this.service.dynamicCard;
  }

 
}
