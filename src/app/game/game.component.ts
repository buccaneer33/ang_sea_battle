import { Component, OnInit } from '@angular/core';
 import { TransferService } from '../services/transfer.service';
 import { PlayerComponent } from './components/player/player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: []

})

export class GameComponent implements OnInit {

  posType: string;
  gameDiff: string;
  field: any;

  public player1 = 'Player';
  public player2 = 'AI';
  public playerName1: string;
  public playerName2 = 'AI';
  public fieldSize;
  public turnToShot: boolean;
  public leftSide = 'left';
  public rightSide = 'right';
  public turn: string;


  constructor(
    private transferService: TransferService
  ) {}

  ngOnInit() {
    if (this.transferService.getSize()) {
      this.fieldSize = this.transferService.getSize();
    } else { this.fieldSize = 'sizeMedium'; }

    if (this.transferService.getPos()) {
      this.posType = this.transferService.getPos();
    } else { this.posType = 'random'; }

    if (this.transferService.getDiff()) {
      this.gameDiff = this.transferService.getDiff();
    } else { this.gameDiff = 'medium'; }

    if (this.transferService.getName()) {
      this.playerName1 = this.transferService.getName();
    } else { this.playerName1 = 'Игрок'; }

    console.log(' game ' +  this.player1 + ' ' + this.player2 + ' ' + this.playerName2 + ' ' + this.playerName1);
  }


}

