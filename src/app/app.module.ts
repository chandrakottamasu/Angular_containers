import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { AppCardComponent } from './app-card/app-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardServiceService } from './card-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    AppCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,ReactiveFormsModule,FormsModule
    
  ],
  providers: [CardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
