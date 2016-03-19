import {Component, OnInit} from 'angular2/core';
import {TableEntriesService} from '../services/table-entries.service';

@Component({
  selector: 'sr-item-window',
  templateUrl: './app/views/item-window.html'
})
export class ItemWindowComponent implements OnInit {
  public config;

  constructor(private _tableEntriesService: TableEntriesService) {

  }

  hideWindow() {
    this.config.show = false;
    debugger;
  }

  // on app load, do this:
  ngOnInit() {
    this._tableEntriesService.getItemWindowConfig().then(config => {
      this.config = config;
    });
  }
}