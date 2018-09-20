// system
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
// components
import { AppComponent } from './app.component';
import { FieldComponent } from './game/components/field/field.component';
import { GameComponent } from './game/game.component';
import { GameConfigComponent } from './game-config/game-config.component';
import { PlayerComponent } from './game/components/player/player.component';
import { SquadronComponent } from './game/components/squadron/squadron.component';
import { FireLogComponent } from './game/components/fire-log/fire-log.component';
import { CellComponent } from './game/components/cell/cell.component';
import { ShipComponent } from './game/components/ship/ship.component';

// services
import { TransferService } from './services/transfer.service';
import { ShipPositionService } from './game/services/ship-position/ship-position.service';
import { SwitchTurnService } from './game/services/switch-turn/switch-turn.service';
import { FireLogService } from './game/services/fire-log/fire-log.service';
import { ShotService } from './game/services/shot/shot.service';


const appRoutes: Routes = [
    { path: '', component: GameConfigComponent},
    { path: 'game', component: GameComponent},
    { path: '**', redirectTo: '/' }
];


@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    CellComponent,
    GameComponent,
    GameConfigComponent,
    PlayerComponent,
    SquadronComponent,
    FireLogComponent,
    ShipComponent,
    FireLogComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TransferService,
    ShipPositionService,
    SwitchTurnService,
    FireLogService,
    ShotService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
