import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
   this.fetch()
   this.fetch1()
  }
  title = 'games';


  fetch(): any{
    const resp = fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '864a5f758amshabc2522a92f373ap1bc875jsnd73eaf6a66e6'
      }
    }).then(res => res.json()).then(res => res);
  }

  fetch1(){
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
