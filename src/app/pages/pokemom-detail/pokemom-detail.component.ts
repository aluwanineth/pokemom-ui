import { Component, Input, OnInit } from '@angular/core';
import { PokemomService } from 'src/app/services/pokemom.service';
import notify from 'devextreme/ui/notify';

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
  }

  ngOnChanges() {
    var data = this.pokeMomDetailData.pokeUrl.split('/');
    var id = data[6];
     this.getPokemomDetail(id, data.name);
   }

  getPokemomDetail(pokeId: string, pokeName: string) {
    this.pokemomService.getPokemomDetail(pokeId,pokeName).subscribe( response => {
      this.pokeMomDetail = response.results;
      this.stats = response.results.stat;
    }, error => {
      console.log(error);
      notify('Something went wrong', 'error', 2000);
    });
  }

}
