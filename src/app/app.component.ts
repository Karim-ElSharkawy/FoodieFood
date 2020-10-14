import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Loggedin = false;
  title = 'foodiefood';

  isLoggedin() {
    if (this.Loggedin) {
      return true;
    } else return false;
  }
}
