import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DxPopupModule, DxButtonModule, DxTemplateModule, DxScrollViewModule, DxDataGridModule } from 'devextreme-angular';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemomService } from './services/pokemom.service';
import { PokemomDetailComponent } from './pages/pokemom-detail/pokemom-detail.component';
import { FormsModule } from '@angular/forms';


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
    DxFormModule,
    DxLoadIndicatorModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokemomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
