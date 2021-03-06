import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    if ( arg === '' || arg.length < 3 ) return value;

    const resultPokemons = [];

    for(const pokemon of value ){
      if (pokemon.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPokemons.push(pokemon);
      };
    };
    return resultPokemons;
  }

}
