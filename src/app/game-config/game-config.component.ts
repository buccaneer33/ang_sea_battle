import { Component, OnInit } from '@angular/core';

import { FieldSize } from '../field_config/field_size';
import { FIELD_SIZES } from '../field_config/field_sizes';

import { PosType } from '../field_config/position_type';
import { POS_TYPES } from '../field_config/position_types';

import { GameDifficalty } from '../field_config/game_difficalty';
import { GAME_DIFF } from '../field_config/game_difficaltyes';

import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.scss'],
  providers: []
})
export class GameConfigComponent implements OnInit {
  title = 'Морской бой';

  radioFieldSel: any;
  radioFieldSelected: string;
  radioFieldSelectedString: string;
  fieldList: FieldSize[] = FIELD_SIZES;
//////////////////////
  radioPosSel: any;
  radioPosSelected: string;
  radioPosSelectedString: string;
  posList: PosType[] = POS_TYPES;
///////////////////////
  radioGameDiffSel: any;
  radioGameDiffSelected: string;
  radioGameDiffSelectedString: string;
  GameDiffList: GameDifficalty[] = GAME_DIFF;
  ////////////////////
  UserName = 'Игрок';


  constructor(private transferService: TransferService) {
    this.fieldList = FIELD_SIZES;
  // какой вариант у нас будет по умолчанию?
    this.radioFieldSelected = 'sizeMedium';
    this.getFieldSelecteditem();
  /////////////////////////
    this.posList = POS_TYPES;
    // какой вариант у нас будет по умолчанию?
    this.radioPosSelected = 'random';
    this.getPosSelecteditem();
  //////////////////////////
  this.GameDiffList = GAME_DIFF;
  // какой вариант у нас будет по умолчанию?
  this.radioGameDiffSelected = 'medium';
  this.getGameDiffSelecteditem();
   }
   // Добавим выбранный в массив

  getFieldSelecteditem() {
    this.radioFieldSel = FIELD_SIZES.find( fieldItem => fieldItem.name === this.radioFieldSelected);
    this.radioFieldSelectedString = JSON.stringify(this.radioFieldSel.name);
    this.transferService.setSize(this.radioFieldSelectedString);

  }
// Radio Change Event
onFieldItemChange(fieldItem) {
  this.getFieldSelecteditem();
}
///////////////////

getPosSelecteditem() {
  this.radioPosSel = POS_TYPES.find( posItem => posItem.name === this.radioPosSelected);
  this.radioPosSelectedString = JSON.stringify(this.radioPosSel.name);
  this.transferService.setPos(this.radioPosSelectedString);
}
// Radio Change Event
onPosItemChange(posItem) {
this.getPosSelecteditem();
}
//////////////////////////////
getGameDiffSelecteditem() {
  this. radioGameDiffSel = GAME_DIFF.find( GameDiffItem => GameDiffItem.name === this.radioGameDiffSelected);
  this.radioGameDiffSelectedString = JSON.stringify(this.radioGameDiffSel.name);
  this.transferService.setDiff(this.radioGameDiffSelectedString);
}
// Radio Change Event
onGameDiffItemChange(GameDiffItem) {
this.getGameDiffSelecteditem();
}

  ngOnInit() {
    this.setSettingsData();
    console.log('start 1' + this.radioFieldSelectedString + ' ' + this.radioPosSelectedString);
  }
  setSettingsData() {
    this.transferService.setSize(this.radioFieldSelectedString);
    this.transferService.setPos(this.radioPosSelectedString);
    this.transferService.setDiff(this.radioGameDiffSelectedString);
    this.transferService.setName(this.UserName);
  }
}
