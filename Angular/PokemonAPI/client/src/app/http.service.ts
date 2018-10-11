import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon() {

    const bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {
      let name = data['name'];
      console.log("Got our Pokemons!", data);
      console.log(`${name} has the ability ${data['abilities'][0]['ability']['name']}`)
      let url = data['abilities'][0]['ability']['url'];
      console.log(url);
      const obs = this._http.get(url);
      obs.subscribe(data => console.log(`Other ${data['flavor_text_entries'].length} pokemons have same ability as ${name} does.`));
    }
    );
  }
}
