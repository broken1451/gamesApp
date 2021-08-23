import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getAllGames();
  }

  async getAllGames(){
    try {
      const resp = await this.gamesService.getAllGames()?.toPromise();
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  }
}