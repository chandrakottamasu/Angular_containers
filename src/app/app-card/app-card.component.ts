import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CardServiceService } from '../card-service.service';

import { User } from '../user';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {

  constructor(private card:FormBuilder,private router:Router,private service:CardServiceService,private route:ActivatedRoute) { }
  
  @Input() userData:User;
  updatedData:User;
  id:number;
  mode:string;
  appCard = this.card.group({
    image:[''],
    title: ['',Validators.required],
    description:['',Validators.required]
  });

  

  onSaving()
  {
    this.service.pushCard(this.appCard.value);
    this.router.navigate(['/layout']);
  }
  ngOnInit() {
    this.route.data.subscribe((data:any)=>{
      this.mode = data.mode;
    });
    if(this.mode == 'edit'){
    this.route.paramMap.subscribe(data=>{
      this.id = +data.get('id');
      
      if(this.service.dynamicCard.findIndex(e=>e.id === this.id) == -1)
      {
        this.router.navigate(['/layout']);
      }
    this.getData(this.id);    
  });
}
  
  }
  private getData(id:number){
 
    this.userData = this.service.getData(id);
    if(id !=0){
    this.appCard.patchValue({
      title:this.userData.title,
      description:this.userData.description


    });
    
  }
  }

  updateProductData(){
    const index = this.service.dynamicCard.findIndex(e=>e.id === this.id);
    
    this.service.dynamicCard[index]=this.appCard.value;
    this.service.dynamicCard[index].id=this.id;
     this.router.navigate(['/layout']);
    
  
    
  }

  deleteProductData()
  {
    this.service.deleteProduct(this.userData.id);
    this.router.navigate(['/layout']);
  }
  

}
