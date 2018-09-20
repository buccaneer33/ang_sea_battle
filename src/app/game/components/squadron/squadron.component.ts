import { Component, Input, OnInit } from '@angular/core';
import { ShotService } from '../../services/shot/shot.service';

@Component({
  selector: 'app-squadron',
  templateUrl: './squadron.component.html',
  styleUrls: ['./squadron.component.scss']
})
export class SquadronComponent implements OnInit {
  @Input() squadron;

  constructor( private _shotService: ShotService) { }

  ngOnInit() {
  }

}
