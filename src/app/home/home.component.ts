import { Component, OnInit } from '@angular/core';
import { PokeService } from '../shared/services/pokeservice.service'
import { Observable } from 'rxjs';
import { pokemon } from '../shared/models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  pokemon$: Observable<pokemon[]>;
  constructor(private pokeservice:PokeService){

  }
  ngOnInit(){
    this.pokemon$ = this.pokeservice.getPokemons()
    console.log(this.pokemon$);
  }

}
