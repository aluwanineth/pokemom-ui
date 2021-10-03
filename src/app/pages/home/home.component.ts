import { Component, OnInit } from '@angular/core';
import { PokemomService } from 'src/app/services/pokemom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listRepsonseResult: any;
  pokeMomDetail: any;
  pokeName: string = '';
  pokeUrl: string = '';
  popupVisible = false;
  title = "Pokemom Details"
  constructor(private pokemomService: PokemomService) { }

  ngOnInit(): void {
    this.pokemomService.getPokemomList(100,100).subscribe( response => {
      this.listRepsonseResult = response;
    }, error => {
      console.log(error);
    });
  }

  showDetail(pokemom: any) {
    this.pokeMomDetail = pokemom;
    this.popupVisible = true;
    }


}

