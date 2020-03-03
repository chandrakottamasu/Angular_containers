import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCardComponent } from './app-card/app-card.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:'app-card', component:AppCardComponent , data:{ mode : 'read'}},
  {path: 'app-card/edit/:id',component:AppCardComponent , data:{ mode : 'edit'}},
  {path:'layout', component:LayoutComponent , },
  {path:'',redirectTo:'/layout', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
