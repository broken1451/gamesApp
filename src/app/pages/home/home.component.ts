import { Component, OnInit } from '@angular/core';
import { GamesResponse } from '../models/games.interface';
import { GamesService } from '../services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public games: GamesResponse[] = [];
  public page = 0;

  constructor(private gamesService: GamesService, private router: Router) { }

  ngOnInit(): void {
    this.getAllGames();
  }

  async getAllGames(): Promise<any>{
    try {
      const resp: GamesResponse[] = await this.gamesService.getAllGames()?.toPromise();
      this.games = resp;
      console.log(this.games)
    } catch (error) {
      console.log(error);
    }
  }

  next(): any{
    this.page += 8;
    if (this.page > 360) {
      return;
    }
  }

  previos(): any{
    if (this.page > 0) {
      this.page -= 8;
    }
  }

  gotodetails(game: GamesResponse): void{
    this.router.navigate(['/games/details', game.id])
    console.log(game)
  }
}
