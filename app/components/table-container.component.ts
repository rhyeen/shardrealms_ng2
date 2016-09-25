import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _tableEntriesService: TableEntriesService
  ) { }
  
  getTables() {
    this._tableEntriesService.getTables().then(tables => this.tables = tables);
  }

  // on app load, do this:
  ngOnInit() {
    this.getTables();
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      if (id) {
        this.selectedTable = id;
      }
    });
  }

  goToRoot() {
    this.router.navigate(['/']);
  }

  selectTable(table: string) {
    this.router.navigate(['/table', table]);
    this.selectedTable = table;
  }

  backToSelection(){
    this.router.navigate(['/table']);
    this.selectedTable = null;
  }
}