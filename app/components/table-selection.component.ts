import {Component, OnInit} from '@angular/core';
import {TableEntriesService} from '../services/table-entries.service';
import {Entry} from '../interfaces/entry';

@Component({
  selector: 'sr-table-selection',
  templateUrl: './app/views/table-selection.html',
  inputs: ['table'],
  providers: [TableEntriesService]
})
export class TableSelectionComponent implements OnInit {
  public table: string;
  public entries: Entry[];
  public allEntries;
  public searchQuery;

  constructor(private _tableEntriesService: TableEntriesService) { }
  
  getTableEntries() {
    this._tableEntriesService.getTableEntries(this.table).then(entries => {
      this.entries = entries;
      this.allEntries = entries;
    });
  }
  
  filterEntries() {
    var searchQuery,
      entryQuery;
    searchQuery = this.searchQuery.toLowerCase();
    this.entries = [];
    for (let entry of this.allEntries) {
      entryQuery = entry.name.toLowerCase();
      if (entryQuery.includes(searchQuery)) {
        this.entries.push(entry);
      }
    }
  }

  // on app load, do this:
  ngOnInit() {
    this.getTableEntries();
  }

  search(searchValue) {
    this.searchQuery = searchValue;
    this.filterEntries();
  }
}