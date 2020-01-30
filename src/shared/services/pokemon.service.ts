// country.service.ts
import { Injectable } from "@angular/core";
import { Pokemon } from "../model/pokemon";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// Observable shit hé
import { tap, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { PokemonDetails } from '../model/pokemonDetails';
@Injectable()
export class PokemonService {
  urllocal = "http://localhost:3000/faviePokemon";
  url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200";
  Pokemon: Object;
  constructor(private http: HttpClient) { }

  getPokemon(): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>(this.urllocal)
      .pipe(tap(result => console.log("via json-server: ", result)));
  }

  getPokeApi(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url).pipe(map(res => res["results"]));
  }

  addFavie(value): Observable<any[]> {
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.get<any[]>(value).pipe();
  }

  addFavieJSON(value): Observable<any> {
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.post(this.urllocal, value, { headers: headers });
  }

  getDetails(url): Observable<any[]> {
    console.log(url);
    return this.http
      
      .get<any[]>(url).pipe();
  }

  deleteFavie(value) {
    return this.http
    .delete(this.urllocal+`/${value}`)
    .​subscribe(Pokemon => this.Pokemon = Pokemon)
  }
}
