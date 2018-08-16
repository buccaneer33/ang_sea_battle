import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Морской бой';


  startGame(fieldSise: string, shipPosition: string) {
    alert('fieldSise ' + fieldSise + ' shipPosition ' + shipPosition);
  }
}

export class FieldSise {
  size;

  constructor() {
    this.size = {
      fieldSise: 'fieldSise'
    };
  }
}
