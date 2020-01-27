import { Component, OnInit } from '@angular/core';
import { PokeService } from './shared/services/pokeservice.service'
import { Observable } from 'rxjs';
import { pokemon } from './shared/models/pokemon.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pokemonApp';

}