import { Component } from '@angular/core';

//decorators
//angular component is a normal class which has component decorators
//selector can be used using html tag
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//one component acts like one action method because it only can correspond to 1 view

//export is like public keyword in c#
export class AppComponent {
  title = 'movieshopspa'; //property
}
