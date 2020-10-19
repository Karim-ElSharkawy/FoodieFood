import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  Loggedin = false;
  username = 'Karim El-Sharkawy';
  title = 'foodiefood';

  isLoggedin() {
    // When logged in, show top avatar of logged in user.
    if (localStorage.LoggedIn) {
      this.Loggedin = true;
      this.username = localStorage.getItem('LoggedIn');
    } else {
      this.Loggedin = false;
    }

    if (this.Loggedin) {
      return true;
    } else return false;
  }

  logOut() {
    localStorage.removeItem('LoggedIn');
    this.Loggedin = false;
    location.reload();
  }
  constructor() {}

  ngOnInit(): void {}
}
