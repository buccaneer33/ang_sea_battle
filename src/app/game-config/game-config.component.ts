import { Component, OnInit } from '@angular/core';

import { FieldSize } from '../field_config/field_size';
import { FIELD_SIZES } from '../field_config/field_sizes';

import { PosType } from '../field_config/position_type';
import { POS_TYPES } from '../field_config/position_types';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.scss'],
  providers: [ConfigService]
})
export class GameConfigComponent implements OnInit {
  title = 'Морской бой';

  radioFieldSel: any;
  radioFieldSelected: string;
  radioFieldSelectedString: string;
  fieldList: FieldSize[] = FIELD_SIZES;
//////////////////////////////////
  radioPosSel: any;
  radioPosSelected: string;
  radioPosSelectedString: string;
  posList: PosType[] = POS_TYPES;

  constructor(private configService: ConfigService) {
    this.fieldList = FIELD_SIZES;
    // какой вариант у нас будет по умолчанию?
    this.radioFieldSelected = 'sizeMedium';
    this.getFieldSelecteditem();
    /////////////////////////
    this.posList = POS_TYPES;
    // какой вариант у нас будет по умолчанию?
    this.radioPosSelected = 'random';
    this.getPosSelecteditem();
   }
   // Добавим выбранный в массив

  getFieldSelecteditem() {
    this.radioFieldSel = FIELD_SIZES.find( fieldItem => fieldItem.name === this.radioFieldSelected);
    this.radioFieldSelectedString = JSON.stringify(this.radioFieldSel.name);

  }
// Radio Change Event
onFieldItemChange(fieldItem) {
  this.getFieldSelecteditem();
}
///////////////////

getPosSelecteditem() {
  this.radioPosSel = POS_TYPES.find( posItem => posItem.name === this.radioPosSelected);
  this.radioPosSelectedString = JSON.stringify(this.radioPosSel.name);
}
// Radio Change Event
onPosItemChange(posItem) {
this.getPosSelecteditem();
}
  ngOnInit() {
    this.configService.size = this.radioFieldSelectedString;
    this.configService.pos = this.radioPosSelectedString;
    console.log('start 1' + this.radioFieldSelectedString + ' ' + this.radioPosSelectedString);
  }
}
