import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonType } from '../interface/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokemonType> {
    return this.http.get<PokemonType>(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'
    );
  }
  getNPPokemons(np: string): Observable<PokemonType> {
    return this.http.get<PokemonType>(np);
  }

  getPokemonByUrl(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
