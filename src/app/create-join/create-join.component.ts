import { Component, OnInit,  } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { PartywolfService } from '../partywolf.service';
import { SocketService } from '../sockets.service';
import { Game, Player } from '../game.model';

@Component({
  selector: 'app-create-join',
  templateUrl: './create-join.component.html',
  styleUrls: ['./create-join.component.scss'],
  providers: [
    PartywolfService,
    SocketService
  ],

  // encapsulation: ViewEncapsulation.None
})
export class CreateJoinComponent implements OnInit {

  constructor(private partywolfService: PartywolfService, private socketService: SocketService) { }
  public joining: boolean = false;
  public creating: boolean = false;
  public nickname: string = '';
  public game: Game;
  public ioConnection: any;


  ngOnInit() {
    this.socketService.initSocket();
  }

  private createGame() {
    this.creating = true;
    this.partywolfService.createGame(this.nickname).toPromise().then(game => {
      this.game = game;
      
      console.log(game);  
    } );
  };

  private joinGame() {
    this.creating = true;
    this.partywolfService.joinGame("mock", this.nickname).toPromise().then(game => {
      this.game = game;
      console.log(game);  
      this.joining = false;
    } );
  };
  
  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((game: Game) => {
        console.log(game);
      });

    this.socketService.onConnect()
      .subscribe(() => {
        console.log('onConnect');
      });

    this.socketService.onDisconnect()
      .subscribe(() => {
        console.log('onDisconnect');
      });
  }
}