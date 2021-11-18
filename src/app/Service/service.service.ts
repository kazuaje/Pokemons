import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../Modelo/Pokemon';

@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url="https://pokemon-pichincha.herokuapp.com/pokemons";

  getPokemons(){
    return this.http.get<Pokemon[]>(this.Url);
  }
  createPokemon(pokemon:Pokemon){
    return this.http.post<Pokemon>(this.Url,pokemon);
  }
  getPokemonId(id:number){
    return this.http.get<Pokemon>(this.Url+"/"+id);
  }
  updatePokemon(pokemon:Pokemon){
    return this.http.put<Pokemon>(this.Url+"/"+pokemon.id,pokemon);
  }
  deletePokemon(pokemon:Pokemon){
    return this.http.delete<Pokemon>(this.Url+"/"+pokemon.id);
  }
}
