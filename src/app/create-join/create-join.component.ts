import { Component, OnInit,  } from '@angular/core';

import { PartywolfService } from '../partywolf.service';
import { SocketService } from '../sockets.service';
import { Game, Player } from './game.model';

@Component({
  selector: 'app-create-join',
  templateUrl: './create-join.component.html',
  styleUrls: ['./create-join.component.scss'],
  providers: [
    PartywolfService,
    SocketService
  ]
  // encapsulation: ViewEncapsulation.None
})
export class CreateJoinComponent implements OnInit {

  constructor(private partywolfService: PartywolfService, private socketService: SocketService) { }
  public joining: boolean = false;
  public creating: boolean = false;
  public gameId: string = "";
  public  ioConnection: any;
  ngOnInit() {
    this.socketService.initSocket();
  }

  public createGame() {
    this.creating = true;
    this.getGameId();
    
  };
  private getGameId() {
    this.partywolfService.getGame().toPromise().then(gameId => {
      this.gameId = gameId.game;
      console.log(gameId);  
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