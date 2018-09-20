import { Injectable } from '@angular/core';
// import { ShotService } from '../shot/shot.service';

@Injectable({
  providedIn: 'root'
})
export class SwitchTurnService {

  public playerTurn: boolean;
  public AITurn: boolean;

  constructor() {
    this.playerTurn = true;
    this.AITurn = !this.playerTurn;
  }
  getTurn () {
    if (this.playerTurn) {
      return 'AI';
    } else {
      return 'Player';
    }
  }
  switchTurn (): void {
    this.playerTurn = !this.playerTurn;
    this.AITurn = !this.playerTurn;
  }
}
