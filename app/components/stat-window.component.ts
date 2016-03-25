import {Component, OnInit} from 'angular2/core';
import {PlayerEntriesService} from '../services/player-entries.service';

@Component({
  selector: 'sr-stat-window',
  templateUrl: './app/views/stat-window.html'
})
export class StatWindowComponent implements OnInit {
  public config;

  constructor(private _playerEntriesService: PlayerEntriesService) { }

  hideWindow() {
    this.config.show = false;
  }

  // on app load, do this:
  ngOnInit() {
    this._playerEntriesService.getStatWindowConfig().then(config => {
      this.config = config;
    });
  }
}