import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DxPopupModule, DxButtonModule, DxTemplateModule, DxScrollViewModule, DxDataGridModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemomService } from './services/pokemom.service';
import { PokemomDetailComponent } from './pages/pokemom-detail/pokemom-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemomDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxPopupModule,
    DxButtonModule,
    DxTemplateModule,
    DxScrollViewModule,
    DxDataGridModule,
    HttpClientModule
  ],
  providers: [PokemomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
