import { Component, OnInit, Input, ViewChild } from '@angular/core';
// import { TransferService } from '../../../services/transfer.service';
// import { SmallFieldComponent } from './fields/small-field/small-field.component';
// import { MediumFieldComponent } from './fields/medium-field/medium-field.component';
// import { BigFieldComponent } from './fields/big-field/big-field.component';
import { ShipPositionService } from '../../services/ship-position/ship-position.service';
import Cell from '../../models/cell.model';
import Coordinates from '../../models/coordinates.model';
import { SwitchTurnService } from '../../services/switch-turn/switch-turn.service';
import { FireLogService } from '../../services/fire-log/fire-log.service';
import { EventEmitter } from 'protractor';
import { ShotService } from '../../services/shot/shot.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input () fieldSize: string;
  @Input () holder: string;
  field: string;

  public options: {
    fieldSize: {
      'standard': 10
    }
  };

  public positionX: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public positionY: string[] = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К'];
  public cells: Cell[][];

  constructor(
    private _shipPositionService: ShipPositionService,
    private _switchTurnService: SwitchTurnService,
    private _fireLogService: FireLogService,
    private _shotService: ShotService
  ) {}

  ngOnInit() {
    this.initBoard(this.holder);
    this.setupShipsRandomly();

  }
  setupShipsRandomly () {
    this.cells = [];
    this._shipPositionService.createCellMatrix(this.holder);
    this._shipPositionService.setRandomShipLocal(this.holder);
    this.initBoard(this.holder);

    if (this.holder === 'Player') {
      this._shotService.resetSubject();
    }
  }

  getFired (position: Coordinates) {
    this._fireLogService.log(this.holder, this.positionY[position.y] + '-' + this.positionX[position.x]);
  }

  initBoard (holder: string) {
    if (holder === 'Player') {
      this.cells = this._shipPositionService.playerField;
    } else {
      this.cells = this._shipPositionService.AIField;
    }
  }

}
