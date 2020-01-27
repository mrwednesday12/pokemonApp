import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavieComponent } from './favie/favie.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const​ routes​:​ ​Routes​ ​=​ [{ path: ​''​, redirectTo: ​'home'​, pathMatch: ​'full'​},   { path: ​'home'​, component: HomeComponent },   { path: ​'favie'​, component: FavieComponent},   { path: ​'contact'​, component: ContactComponent}   ]; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavieComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
