import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,private gameService: GamesService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id})=>{
      this.getGameById(id).subscribe(data=>console.log(data))
    })
    // this.fetch()
  }

  getGameById(id: string): Observable<any>{
    return this.gameService.getGameById(id);
  }

  fetch(){
   try {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/game?id=452", {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    		"x-rapidapi-key": "864a5f758amshabc2522a92f373ap1bc875jsnd73eaf6a66e6"
    	}
    })
    .then(res => res.json()).then(res => console.log({res}))
    .catch(err => {
    	console.error(err);
    });
   } catch (error) {
     console.log('here')
       console.log({error})
   }
  }

}
