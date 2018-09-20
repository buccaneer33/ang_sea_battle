import { Injectable } from '@angular/core';
import { SwitchTurnService } from '../switch-turn/switch-turn.service';
import Coordinates from '../../models/coordinates.model';


@Injectable({
  providedIn: 'root'
})
export class FireLogService {
  public playerShots: string[] = [];
  public AIShots: string[] = [];

  constructor(private _switchTurnService: SwitchTurnService) {

  }
  log (holder: string, message: string): void {
    if (holder === 'Player' && this._switchTurnService.AITurn) {
      this.AIShots.push(message);
    } else if (holder === 'AI' && this._switchTurnService.playerTurn) {
      this.playerShots.push(message);
    }
  }
  getLog (holder) {
    if (holder === 'Player') {
      return this.playerShots;
    } else {
      return this.AIShots;
    }
  }
}
