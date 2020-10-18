import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrls: ['./sign-page.component.css'],
})
export class SignPageComponent implements OnInit {
  router: string;
  accountList = [{ userName: 'Karim123', password: 'randompass' }];

  addAccount(userName: string, password: string) {
    this.accountList.push({ userName: userName, password: password });
  }
  accRecieve(accData: object) {
    this.accountList.forEach((account) => {
      if ((accData as any).username == account.userName) {
        confirm('Logged in, Welcome ' + (accData as any).username + '!');
      } else {
        this.accountList.push({
          userName: (accData as any).username,
          password: (accData as any).password,
        });
        confirm('Signed up, Welcome ' + (accData as any).username + '!');
      }
    });
  }
  constructor(private _router: Router) {
    this.router = _router.url;
  }

  ngOnInit(): void {}
}
