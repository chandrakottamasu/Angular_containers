import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardServiceService } from '../card-service.service';
@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {

  constructor(private card:FormBuilder,private router:Router,private service:CardServiceService) { }

  appCard = this.card.group({
    image:[''],
    title: ['',Validators.required],
    description:['',Validators.required]
  });

  

  onSaving()
  {
    this.service.dynamicCard.push(this.appCard.value);
    this.router.navigate(['/layout']);
  }
  ngOnInit() {
  }

}
