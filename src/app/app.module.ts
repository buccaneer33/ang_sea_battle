import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { GameComponent } from './game/game.component';
import { GameConfigComponent } from './game-config/game-config.component';

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
    GameConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
