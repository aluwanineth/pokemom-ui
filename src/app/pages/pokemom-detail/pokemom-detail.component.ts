import { Component, Input, OnInit } from '@angular/core';
import { PokemomService } from 'src/app/services/pokemom.service';

@Component({
  selector: 'app-pokemom-detail',
  templateUrl: './pokemom-detail.component.html',
  styleUrls: ['./pokemom-detail.component.css']
})
export class PokemomDetailComponent implements OnInit {
  pokeMomDetail: any;
  stats: any;
  speices: any;
  @Input() pokeMomDetailData: any;
  constructor(private pokemomService: PokemomService) { }

  ngOnInit(): void {
    // var data = this.pokeMomDetailData.pokeUrl.split('/');
    // var id = data[6];
    // this.getPokemomDetail(id, data.name);
  }

  ngOnChanges() {
    var data = this.pokeMomDetailData.pokeUrl.split('/');
    var id = data[6];
     this.getPokemomDetail(id, data.name);
   }

  getPokemomDetail(pokeId: string, pokeName: string) {
    this.pokemomService.getPokemomDetail(pokeId,pokeName).subscribe( response => {
      this.pokeMomDetail = response.results;
      this.speices = response.results.species;
       this.stats = response.results.stat;
      console.log('species',this.stats);
      console.log(this.pokeMomDetail);
    }, error => {
      console.log(error);
    });
  }

}
