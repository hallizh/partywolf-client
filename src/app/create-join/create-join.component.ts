import { Component, OnInit,  } from '@angular/core';

import { PartywolfService } from '../partywolf.service';

@Component({
  selector: 'app-create-join',
  templateUrl: './create-join.component.html',
  styleUrls: ['./create-join.component.scss'],
  providers: [
    PartywolfService
  ]
  // encapsulation: ViewEncapsulation.None
})
export class CreateJoinComponent implements OnInit {

  constructor(private partywolfService: PartywolfService) { }
  public joining: boolean = false;
  public creating: boolean = false;
  public gameId: string = "";
  ngOnInit() {
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
}
