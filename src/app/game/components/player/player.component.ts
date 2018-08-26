import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../../../config.service';
// import { FieldComponent } from '../../components/field/field.component';
// import { SquadronComponent } from '../../components/squadron/squadron.component';
// import { ShipComponent } from '../../components/ship/ship.component';
// import { CellComponent } from '../../components/cell/cell.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
   @Input () playerName: string;
   @Input () fieldSize: string;
   @Input () panelPos: string;

  constructor() {}

  ngOnInit() {

  }

}
