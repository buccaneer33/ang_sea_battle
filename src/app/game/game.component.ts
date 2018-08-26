import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service';
import { PlayerComponent } from './components/player/player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: []

})

export class GameComponent implements OnInit {
  posType: string;
  gameDiff: string;
  field: any;

  public playerName1: string;
  public playerName2 = 'AI';
  public fieldSize;
  public turnToShot: boolean;
  public leftSide = 'left';
  public rightSide = 'right';


  constructor(private configService: ConfigService) {}

  ngOnInit() {
    if (this.configService.getSize()) {
      this.fieldSize = this.configService.getSize();
    } else { this.fieldSize = 'sizeMedium'; }

    if (this.configService.getPos()) {
      this.posType = this.configService.getPos();
    } else { this.posType = 'random'; }

    if (this.configService.getDiff()) {
      this.gameDiff = this.configService.getDiff();
    } else { this.gameDiff = 'medium'; }

    if (this.configService.getName()) {
      this.playerName1 = this.configService.getName();
    } else { this.playerName1 = 'Игрок'; }

    console.log(' game ' +  this.fieldSize + ' ' + this.posType + ' ' + this.gameDiff + ' ' + this.playerName1);
  }


}

