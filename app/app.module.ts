import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { routing,
         appRoutingProviders }  from './app.routing';

import {RootContainerComponent} from './components/root-container.component';
import {LevelContainerComponent} from './components/level-container.component';
import {LevelModifierComponent} from './components/level-modifier.component';
import {LevelModifierItemComponent} from './components/level-modifier-item.component';
import {DynamicListComponent} from './components/dynamic-list.component';
import {StatComponent} from './components/stat.component';
import {ItemWindowComponent} from './components/item-window.component';
import {StatWindowComponent} from './components/stat-window.component';
import {SkillContainerComponent} from './components/skill-container.component';
import {PlayerSelectionComponent} from './components/player-selection.component';
import {PlayerViewComponent} from './components/player-view.component';
import {PlayerListContainerComponent} from './components/player-list-container.component';
import {PlayerArrStat} from './components/player-arr-stat.component';
import {NewPlayerContainerComponent} from './components/new-player-container.component';
import {TableContainerComponent} from './components/table-container.component';
import {TableSelectionComponent} from './components/table-selection.component';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
  	AppComponent,
  	RootContainerComponent,
  	LevelContainerComponent,
  	LevelModifierComponent,
  	LevelModifierItemComponent,
  	DynamicListComponent,
  	ItemWindowComponent,
  	StatWindowComponent,
  	StatComponent,
  	SkillContainerComponent,
  	PlayerSelectionComponent,
  	PlayerViewComponent,
  	PlayerListContainerComponent,
  	PlayerArrStat,
  	NewPlayerContainerComponent,
  	TableContainerComponent,
  	TableSelectionComponent
  ],
  providers: [
  	appRoutingProviders
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
