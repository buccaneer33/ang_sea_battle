import { Component, OnInit, Input } from '@angular/core';
// import { TransferService } from '../../../services/transfer.service';
 import { HttpService} from '../../../services/http.service';

// import { SmallField, MediumField, BigField} from '../../../config';
import { Ship } from '../../models/ship.model';
import Coordinates from '../../models/coordinates.model';
import { ShipPositionService } from '../../services/ship-position/ship-position.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],

})
export class PlayerComponent implements OnInit {

   @Input () playerName: string;
   @Input () player: string;
  // @Input () fieldSize: string;
  // @Input () panelPos: string;
   public squadron: Ship [][] = [];

  constructor(
    private _shipPositionService: ShipPositionService) {
      console.log('playerName ' + this.playerName + ' player ' + this.player);
    }

  ngOnInit() {
    this.squadron = this._shipPositionService.getShips(this.playerName);

  }

}
