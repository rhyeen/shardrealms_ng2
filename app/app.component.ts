import {Component, OnInit} from 'angular2/core';
import {RootContainerComponent} from './components/root-container.component';

@Component({
  selector: 'sr-app',
  //template: '<h1>HI</h1>',
  templateUrl: './app/views/app.html',
  directives: [RootContainerComponent]
})
export class AppComponent implements OnInit {

  // on app load, do this:
  ngOnInit() {
  }
}