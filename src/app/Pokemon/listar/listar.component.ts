import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Pokemon } from 'src/app/Modelo/Pokemon';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pokemons: Pokemon[];
  constructor(private service: ServiceService, private router: Router) { }

  filterPokemon = '';

  ngOnInit() {
    this.service.getPokemons()
      .subscribe(data => {
        this.pokemons = data;
      });
  }

  Editar(pokemon:Pokemon):void{
    localStorage.setItem("id",pokemon.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(pokemon:Pokemon){
    this.service.deletePokemon(pokemon)
    .subscribe(data=>{
      this.pokemons=this.pokemons.filter(p=>p!==pokemon);
      alert("Item eliminado...");
    })
  }

}
