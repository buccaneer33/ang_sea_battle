import { Component, OnInit, Input } from '@angular/core';
import { FireLogService } from '../../services/fire-log/fire-log.service';


@Component({
  selector: 'app-fire-log',
  templateUrl: './fire-log.component.html',
  styleUrls: ['./fire-log.component.scss']
})
export class FireLogComponent implements OnInit {
  @Input () public player1: string;
  @Input () public player2: string;
  public logArray1: string [];
  public logArray2: string [];

  constructor(private _fireLogService: FireLogService) { }

  ngOnInit() {
    this.logArray1 = this._fireLogService.getLog(this.player1);
    this.logArray2 = this._fireLogService.getLog(this.player2);
  }
}
