import { Injectable } from '@angular/core';
import Cell from '../../models/cell.model';
import Coordinates from '../../models/coordinates.model';
import { Ship } from '../../models/ship.model';
import { HttpService } from '../../../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ShipPositionService {
  // напоминалка. делай общий сервис с данными по игре. сбор информации из конфига туда.

  public fieldSizeConst = 10;
  public fieldSize: any;
   // РАЗМЕР ЭСКАДРЫ ПОДТЯГИВАЕМ ИЗ КОНФИГА
  public config: Object;

  public squadronList = [[4], [3], [2], [1]];

  public playerShips: Ship  [][];
  public AIShips: Ship  [][];
  public playerField: Cell  [][];
  public AIField: Cell  [][];

  constructor(private _httpService: HttpService) {
    this.createShipMatrix ('Player');
    this.createShipMatrix ('AI');
    this.createCellMatrix ('Player');
    this.createCellMatrix ('AI');
    this._httpService.getData().subscribe(data => {
      this.config = data;
    });
   }
   getRandomNum (min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
   createCellMatrix (holder): void {
    const cellMatrix = [];

    for (let i = 0; i < 10; i++) {
     cellMatrix[i] = [];
     for (let j = 0; j < 10; j++) {
       cellMatrix[i].push(new Cell( new Coordinates(i, j)));
     }
    }

    if (holder === 'Player') {
     this.playerField = cellMatrix;
   } else {
     this.AIField = cellMatrix;
   }
  }
  /////////////////////
   createShipMatrix (holder): void {
    const shipMatrix = [];

    for (let i = 0; i < 4; i++) {
      shipMatrix[i] = [];
      for (let j = 0; j < (i + 1); j++) {
        shipMatrix[i][j] = new Ship (i + 1);
      }
    }
    if (holder === 'Player') {
      this.playerShips = shipMatrix;
    } else {
      this.AIShips = shipMatrix;
    }
  //  console.log('playerShips ' + this.playerShips);
  //  console.log('AIShips ' + this.AIShips);
  }
//////////////////////////////////



   getShips (holder): Ship[][] {
    if (holder === 'Player') {
      return this.playerShips;
    } else {
      return this.AIShips;
    }
  }
  getCells(holder): Cell[][] {
    if (holder === 'Player') {
      return this.playerField;
    } else {
      return this.AIField;
    }
  }

   setRandomShipLocal(holder) {
     for (let i = 1; i <= this.squadronList.length; i++) {
      const shipLength: number = this.squadronList[i][0];
      console.log('shipLength ' + shipLength);

      for (let j = 0; j < i + 1; j++) {

        if (holder === 'Player') {
          const deckposition = this.validateCell(this.playerField, shipLength);
          this.playerShips[i][j].deckPosition = deckposition;
        } else {
          const deckposition = this.validateCell(this.AIField, shipLength);
          this.AIShips[i][j].deckPosition = deckposition;
        }

      }
     }
   }
   validateCell(cellMatrix: Cell[][], shipLength: number): Coordinates[] {
    const direction: {x: number, y: number} = {x: 0, y: 0};
    direction.x = this.getRandomNum(0, 1);
    direction.y = (direction.x === 0) ? 1 : 0;

    // console.log('направление = ' + direction.x);

    const randomPoint = this.getRanomCell(shipLength, direction);
    const validPoint = this.validateShipLocation(cellMatrix, randomPoint, direction, shipLength);
    const shipCoordinates: Coordinates[] = [];

    if (validPoint) {
      if (direction.x) {
        for (let n = 0; n < shipLength; n++) {
          cellMatrix[randomPoint.x + n][randomPoint.y].isAroundShip = false;
          cellMatrix[randomPoint.x + n][randomPoint.y].isShip = true;
          shipCoordinates.push(new Coordinates(randomPoint.x + n, randomPoint.y));
        }
      } else {
        for (let m = 0; m < shipLength; m++) {
          cellMatrix[randomPoint.x][randomPoint.y + m].isAroundShip = false;
          cellMatrix[randomPoint.x][randomPoint.y + m].isShip = true;
          shipCoordinates.push(new Coordinates(randomPoint.x, randomPoint.y + m));
        }
      }
    } else {
      return  this.validateCell (cellMatrix, shipLength);
    }
    return shipCoordinates;
   }
   getRanomCell (shipLength: number, direction: {x: number, y: number}): Coordinates {
    const point: {x: number, y: number} = {x: 0, y: 0};

    if (direction.x) {
      point.x = this.getRandomNum(0, 10 - shipLength);
      point.y = this.getRandomNum(0, 9);
    } else {
      point.x = this.getRandomNum(0, 9);
      point.y = this.getRandomNum(0, 10 - shipLength);
    }
  //  console.log ('point' + point);
    return point;
  }
  validateShipLocation (
    matrix: Cell[][],
    point: {x: number, y: number},
    direction: {x: number, y: number},
    shipLength: number
    ): boolean {

    const startPointX = (point.x === 0) ? point.x : point.x - 1;
    const startPointY = (point.y === 0) ? point.y : point.y - 1;
    let endPointX: number;
    let endPointY: number;

    if (point.x + shipLength === 10 && direction.x) {
      endPointX = point.x + shipLength - direction.x;
    } else if (point.x + shipLength < 10 && direction.x) {
      endPointX = point.x + shipLength;
    } else if (point.x === 9 && !direction.x) {
      endPointX = point.x;
    } else if (point.x === 9 && direction.x && shipLength === 1) {
      endPointX = point.x;
    } else if (point.x < 9 && direction.x && shipLength === 1) {
      endPointX = point.x;
    } else if (point.x < 9 && !direction.x) {
      endPointX = point.x + 1;
    }

    if (point.y + shipLength === 10  && direction.y) {
      endPointY = point.y + shipLength - direction.y;
    } else if (point.y + shipLength < 10  && direction.y) {
      endPointY = point.y + shipLength;
    } else if (point.y === 9 && !direction.y) {
      endPointY = point.y;
    } else if (point.x === 9 && direction.y && shipLength === 1) {
      endPointX = point.y;
    } else if (point.x < 9 && direction.y && shipLength === 1) {
      endPointX = point.y;
    } else if (point.y < 9 && !direction.y) {
      endPointY = point.y + 1;
    }

    console.log('X:', startPointX, endPointX, 'Y:', startPointY, endPointY);

    for (let i = startPointX; i < endPointX + 1; i++ ) {
      for (let j = startPointY; j < endPointY + 1; j++) {
        if (matrix[i][j].isShip) {
          return false;
        }
      }
    }

    for (let i = startPointX; i < endPointX + 1; i++ ) {
      for (let j = startPointY; j < endPointY + 1; j++) {
        matrix[i][j].isAroundShip = true;
      }
    }
    return true;
  }


}
