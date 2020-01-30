import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokedex:boolean = true;

  deleteImage(){
    this.pokedex = false;
  }

  showImage(){
    this.pokedex = true;
  }
}
