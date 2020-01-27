import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pokemon } from '../models/pokemon.model';
@Injectable({
  providedIn: 'root'
})

export class PokeService {
url: string ="https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<pokemon[]>{
    return this.http
    .get<pokemon[]>(this.url + "1");
  } 

  ngOninit(){

  }
}
