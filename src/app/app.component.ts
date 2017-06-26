import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `{{ title | truncate: 3 }}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
