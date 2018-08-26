import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ConfigService } from '../../../config.service';
import { SmallFieldComponent } from './fields/small-field/small-field.component';
import { MediumFieldComponent } from './fields/medium-field/medium-field.component';
import { BigFieldComponent } from './fields/big-field/big-field.component';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input () fieldSize: string;
  field: any;

  constructor() {}

  ngOnInit() {
     console.log(' field ' + this.fieldSize);
     this.getField(this.fieldSize);
  }
  getField(fieldSize) {
    switch (fieldSize) {
      case 'sizeSmall':
      this.field = '<app-small-field></app-small-field>';
          break;
      case 'sizeMedium':
      this.field = '<app-medium-field></app-medium-field>';
          break;
       case 'sizeBig':
       this.field = '<app-big-field></app-big-field>';
          break;
    }
  }
}
