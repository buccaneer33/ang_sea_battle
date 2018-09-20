import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Coordinates from '../../models/coordinates.model';
import { SwitchTurnService } from '../../services/switch-turn/switch-turn.service';
import { ShotService } from '../../services/shot/shot.service';
import { Subscription } from 'rxjs';
import { HttpService } from '../../../services/http.service';


@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  private subscription: Subscription;
  public status: string;

  @Input () position: Coordinates;
  @Input () isShip: boolean;
  @Input () isAroundShip: boolean;
  @Input () holder: string;
  @Input () state: number;


  @Output () getFiredByPlayer: EventEmitter<Coordinates> = new EventEmitter();

  constructor(
    private _swtchTurnService: SwitchTurnService,
    private _shotService: ShotService,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.subscribeToComputerShot(this.holder);
  }
  clickOnCell (): void {
    if (this.state) {
      return;
    } else {
      this.updateView();
      this._shotService.getFiredByPlayer(this.position);
    }
  }

  getFiredByAi (target: Coordinates): void {

    if (this.state) {

    return;
    } else {
      console.log('fire fron AI works');

      this.updateView();

    }
  }

  updateView (): void {
    if (this.isShip) {
      this.status = 'dead';
    } else {
      this.status = 'miss';
    }
  this.getFiredByPlayer.emit(this.position);
}
  subscribeToComputerShot (holder: string) {
    if (this.holder === 'Player') {
      this.subscription = this._shotService.aim$
        .subscribe(coordinate => {
          if (this.position.x === coordinate.x && this.position.y === coordinate.y) {
            this.getFiredByAi(coordinate);
          }
        });
    }
  }
}
