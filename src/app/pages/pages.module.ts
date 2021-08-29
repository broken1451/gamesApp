import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { GamesService } from './services/games.service';
import { FilterPipe } from './pipes/filter.pipe';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    FilterPipe,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  providers: [GamesService]
})
export class PagesModule { }
