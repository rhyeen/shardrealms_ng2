import {Component, OnInit, ElementRef} from '@angular/core';
import {TableEntriesService} from '../services/table-entries.service';

@Component({
  selector: 'sr-item-window',
  templateUrl: './app/views/item-window.html'
})
export class ItemWindowComponent implements OnInit {
  public config;

  constructor(private _tableEntriesService: TableEntriesService, public elementRef: ElementRef) {

  }

  hideWindow() {
    this.config.show = false;
  }

  previousItem() {
    this._tableEntriesService.previousItem();
  }

  // on app load, do this:
  ngOnInit() {
    this._tableEntriesService.setWindowElement(this.elementRef);
    this._tableEntriesService.getItemWindowConfig().then(config => {
      this.config = config;
    });
  }
}