import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  Loggedin = false;
  title = 'foodiefood';

  isLoggedin() {
    if (this.Loggedin) {
      return true;
    } else return false;
  }

  constructor() {}

  ngOnInit(): void {}
}
