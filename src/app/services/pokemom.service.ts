import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ListRepsonseResult } from '../pages/home/models/pokemom.list.results';


@Injectable({
  providedIn: 'root'
})
export class PokemomService {
private REST_API_SERVER = '';
  constructor(private httpClient: HttpClient) {
    this.REST_API_SERVER = environment.REST_API_SERVER;
  }


  getPokemomList(offSet: number, limit: number) : Observable<ListRepsonseResult> {
    var endPoint = `${this.REST_API_SERVER}/api/Pokemoms/getPokemomList?offset=${offSet}&limit=${limit}`;
    return this.httpClient.get<ListRepsonseResult>(endPoint);
  }

  getPokemomDetail(pokeId: string, pokeName: string) : Observable<any> {
    var endPoint = `${this.REST_API_SERVER}/api/Pokemoms/getPokemomDetail?pokeId=${pokeId}&name=${pokeName}`;
    return this.httpClient.get(endPoint);
  }

  search(pokeName: string): Observable<any> {
    console.log('pokeName', pokeName);
    var endPoint = `${this.REST_API_SERVER}/api/Pokemoms/searchForPokemom?name=${pokeName}`;
    return this.httpClient.get(endPoint);
  }
}
