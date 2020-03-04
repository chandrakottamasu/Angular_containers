import { Component, OnInit } from '@angular/core'; 
import { CardServiceService } from '../card-service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  a=[];
  searchText:string;
 
  constructor(private service:CardServiceService,private router:Router,private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.a = this.service.dynamicCard;
  }
  redirectTo(data)
  {
    this.router.navigate(['/app-card/edit',data.id]);
  }

 
}
