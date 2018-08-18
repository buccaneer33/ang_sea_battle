import { Component } from '@angular/core';

import { FieldSize } from './field_config/field_size';
import { FIELD_SIZES } from './field_config/field_sizes';

import { PosType } from './field_config/position_type';
import { POS_TYPES } from './field_config/position_types';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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


  constructor() {
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
      this.radioFieldSel = FIELD_SIZES.find( fieldItem => fieldItem.value === this.radioFieldSelected);
      this.radioFieldSelectedString = JSON.stringify(this.radioFieldSel);
    }
  // Radio Change Event
  onFieldItemChange(fieldItem) {
    this.getFieldSelecteditem();
  }
///////////////////

  getPosSelecteditem() {
    this.radioPosSel = POS_TYPES.find( posItem => posItem.value === this.radioPosSelected);
    this.radioPosSelectedString = JSON.stringify(this.radioPosSel);
  }
  // Radio Change Event
  onPosItemChange(posItem) {
  this.getPosSelecteditem();
  }
}
