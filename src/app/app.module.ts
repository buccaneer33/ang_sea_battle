import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FieldComponent } from './game/components/field/field.component';
import { ConfigService } from './config.service';
import { GameComponent } from './game/game.component';
import { GameConfigComponent } from './game-config/game-config.component';
import { SmallFieldComponent } from './game/components/field/fields/small-field/small-field.component';
import { MediumFieldComponent } from './game/components/field/fields/medium-field/medium-field.component';
import { BigFieldComponent } from './game/components/field/fields/big-field/big-field.component';
import { PlayerComponent } from './game/components/player/player.component';
import { SquadronComponent } from './game/components/squadron/squadron.component';

const appRoutes: Routes = [
    { path: '', component: GameConfigComponent},
    { path: 'game', component: GameComponent},
    { path: '**', redirectTo: '/' }
];


@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    GameComponent,
    GameConfigComponent,
    SmallFieldComponent,
    MediumFieldComponent,
    BigFieldComponent,
    PlayerComponent,
    SquadronComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
