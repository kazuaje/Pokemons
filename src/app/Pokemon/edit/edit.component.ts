import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pokemon } from 'src/app/Modelo/Pokemon';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pokemon :Pokemon=new Pokemon();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPokemonId(+id)
    .subscribe(data=>{
      this.pokemon=data;
    })

  }
  Actualizar(pokemon:Pokemon){
    this.service.updatePokemon(pokemon)
    .subscribe(data=>{
      this.pokemon=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
