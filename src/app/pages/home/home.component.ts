import { Component, OnInit } from '@angular/core';
import { PokemomService } from 'src/app/services/pokemom.service';
import notify from 'devextreme/ui/notify';
import Swal from 'sweetalert2'

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
  title = "Pokemom Details";
  loading = false;
  formData: any = {};

  constructor(private pokemomService: PokemomService) { }

  ngOnInit(): void {
    this.pokemomService.getPokemomList(100,100).subscribe( response => {
      this.listRepsonseResult = response;
    }, error => {
      console.log(error);
      notify('Something went wrong', 'error', 2000);
    });
  }

  showDetail(pokemom: any) {
    this.pokeMomDetail = pokemom;
    this.popupVisible = true;
  }


  async search() {
   // var pokeName = this.formData.name;
    console.log(this.pokeName);
    this.loading = true;
    this.pokemomService.search(this.pokeName).subscribe( response => {
      this.pokeMomDetail = response;
      if (this.pokeMomDetail.message === 'Successfully retrieve pokemom data')  {
        console.log('result:', this.pokeMomDetail);
        this.showDetail(this.pokeMomDetail.results)
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Pokemom not found!',
          footer: 'try a diffrent pokemom guy'
        })
      }

    }, error => {
      this.loading = false;
      console.log(error);
      notify('Something went wrong', 'error', 2000);
    });
    }
  }

