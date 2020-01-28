import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../shared/model/pokemon';
import { PokemonService } from '../../shared/services/pokemon.service';
import { Observable } from 'rxjs';
import { PokemonDetails } from 'src/shared/model/pokemonDetails';

@Component({
  selector: 'app-favie',
  templateUrl: './favie.component.html',
  styleUrls: ['./favie.component.css']
})
export class FavieComponent implements OnInit {
public pokemon$: Observable<Pokemon[]>;
public pokemonDetails$: Observable<PokemonDetails[]>;


public getDetails(url:string){
  this.pokemonDetails$ = this.pokemonService.getDetails(url);
}


  constructor(private pokemonService : PokemonService) {
   }
  ngOnInit() {
  
    this.pokemon$ = this.pokemonService.getPokemon();
    
   // check // this.pokemon$.subscribe(res => {console.log(res)});
  }

}
