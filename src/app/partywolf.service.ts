import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Game } from './game.model'

@Injectable()
export class PartywolfService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:4000/';  // URL to web api

  public createGame(nickname: string): Observable<Game> {
    return this.http.post<any>(this.apiUrl + 'game', {nickname: nickname})
    .pipe(
      tap(createGame => console.log(`fetched game id`)),
      catchError(this.handleError('createGame', []))
    );;
  }
  public joinGame(gameid: string, nickname: string): Observable<Game> {
    return this.http.post<any>(this.apiUrl + 'game/join', {gameid: gameid, nickname: nickname})
    .pipe(
      tap(joinGame => console.log(`joined game`)),
      catchError(this.handleError('joinGame', []))
    );;
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
  	