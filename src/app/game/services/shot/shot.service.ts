import { Injectable } from '@angular/core';
import { ShipPositionService } from '../ship-position/ship-position.service';
import { FireLogService } from '../fire-log/fire-log.service';
import { SwitchTurnService } from '../switch-turn/switch-turn.service';
import Coordinates from '../../models/coordinates.model';
import Cell from '../../models/cell.model';
import { Ship } from '../../models/ship.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShotService {

  public difficulty;
  private aim = new Subject<Coordinates>();
  public aim$ = this.aim.asObservable();

  constructor(
    private _shipPositionService: ShipPositionService,
    private _switchTurnService: SwitchTurnService,
    private _fireLogService: FireLogService
  ) {
    this.setDifficulty(this.easy);
   }
   easy () {
    return  new Coordinates (this._shipPositionService.getRandomNum(0, 9), this._shipPositionService.getRandomNum(0, 9));
  }
   resetSubject() {
    this.aim.complete();
    console.log( 'resetting subscriptions' );
    this.aim = new Subject();
    this.aim$ = this.aim.asObservable();
  }
   getFiredByPlayer (target: Coordinates) {
    const ships = this._shipPositionService.getShips('AI');
    const field = this._shipPositionService.getCells('AI');

    const cellAttacked = field[target.x][target.y];
    cellAttacked.state = 1;

    if (cellAttacked.isShip) {
      const ship = this.findShip(cellAttacked, ships);
      this.hitShip(ship, ships);

      if (ships[ship.x][ship.y].health > 0) {
        console.log('Попадание');
      } else {
        console.log('Корабль уничтожен');
      }

    } else {
      this._switchTurnService.switchTurn();
      if (this._switchTurnService.AITurn) {
        this.fireByAI();
      }
    }
  }

  fireByAI (): void {
    const ships = this._shipPositionService.playerShips;
    const field = this._shipPositionService.playerField;

    let target = this.validateComputerShot (this.difficulty, field);

    while (field[target.x][target.y].isShip) {
      field[target.x][target.y].state = 1;

      const ship = this.findShip(field[target.x][target.y], ships);
      this.hitShip(ship, ships);

      this.makeShot(target);
      target = this.validateComputerShot (this.difficulty, this._shipPositionService.playerField);
    }
    console.log(target, 'state before', field[target.x][target.y].state);
    field[target.x][target.y].state = 1;
    console.log(target, 'state after', field[target.x][target.y].state);
    this.makeShot(target);

    console.log('switch service');
    this._switchTurnService.switchTurn();
    console.log('Human turn', this._switchTurnService.playerTurn);
    console.log('Comp turn', this._switchTurnService.AITurn);
  }
  validateComputerShot (difficulty, cells: Cell[][]) {
    let target = difficulty.call(this);

    while (cells[target.x][target.y].state) {
      console.log('same target');
      target = difficulty.call(this);
    }
      return target;
  }

  findShip (target: Cell, ships: Ship[][]): Coordinates {
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].length; j++) {
        for (let k = 0; k < ships[i][j]. deckPosition.length; k++) {
          if (target.position.x === ships[i][j].deckPosition[k].x && target.position.y === ships[i][j].deckPosition[k].y) {
            return new Coordinates(i, j);
          }
        }
      }
    }
  }

  makeShot (coordinates: Coordinates) {
    this.aim.next(coordinates);
  }

  hitShip (target: Coordinates, ships: Ship[][]) {
    ships[target.x][target.y].getDamage();
  }

  setDifficulty (difficulty): void {
    this.difficulty = difficulty;
  }


}
