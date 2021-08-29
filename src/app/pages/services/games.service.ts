import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GamesResponse } from '../models/games.interface';
import { Observable } from 'rxjs';

@Injectable()
export class GamesService {
  constructor(private httpClient: HttpClient) {}

  public getAllGames(): any {
    try {
      const headers = new HttpHeaders();
      headers.set(`${environment.xrapidapihost}`, `${environment.rapiHost}`);
      headers.set(`${environment.xrapidapikey}`, `${environment.rapiKey}`);
      return this.httpClient.get<GamesResponse>(`${environment.baseUrl}/games`, {headers}).pipe(
        map((games) => {
          return games;
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
}
