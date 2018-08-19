import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [ConfigService]

})

export class GameComponent implements OnInit {
  fieldSize: string;
  posType: string;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.fieldSize = this.configService.size;
    this.posType = this.configService.pos;
    console.log(' game ' +  this.fieldSize + ' ' + this.posType);
  }


}

