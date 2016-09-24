import {Component, OnInit} from '@angular/core';
import {TableEntriesService} from '../services/table-entries.service';

@Component({
  selector: 'sr-table-container',
  templateUrl: './app/views/table-container.html',
  providers: [TableEntriesService]
})
export class TableContainerComponent implements OnInit {
  public tables = [];
  public selectedTable = null;
  
  // get the service
  constructor(private _tableEntriesService: TableEntriesService) { }
  
  getTables() {
    this._tableEntriesService.getTables().then(tables => this.tables = tables);
  }

  // on app load, do this:
  ngOnInit() {
    this.getTables();
  }

  selectTable(table: string) {
    this.selectedTable = table;
  }

  backToSelection(){
    this.selectedTable = null;
  }
}