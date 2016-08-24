import {Component} from '@angular/core';
import {RootContainerComponent} from './components/root-container.component';

@Component({
  selector: 'sr-app',
  templateUrl: './app/views/app.html',
  directives: [RootContainerComponent]
})
export class AppComponent { }
