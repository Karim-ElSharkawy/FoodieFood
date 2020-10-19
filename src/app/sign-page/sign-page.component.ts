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
    let type = (accData as any).type;
    let errorFlag = true;

    if (type == 'In') {
      this.accountList.forEach((account) => {
        if (
          (accData as any).username.toLowerCase() ==
            account.userName.toLowerCase() &&
          (accData as any).password.toLowerCase() ==
            account.password.toLowerCase()
        ) {
          confirm('Logged in, Welcome ' + (accData as any).username + '!');
          errorFlag = false;
        }
      });
    } else {
      this.accountList.forEach((account) => {
        if (
          (accData as any).username.toLowerCase() ==
          account.userName.toLowerCase()
        ) {
          alert('username already exists! Please change the username.');
        }
      });
      this.accountList.push({
        userName: (accData as any).username.toLowerCase(),
        password: (accData as any).password.toLowerCase(),
      });
      confirm('Signed up, Welcome ' + (accData as any).username + '!');
      errorFlag = false;
    }
    if ((accData as any).type == 'In' && errorFlag) {
      alert('Username or Password is incorrect!');
    }
    console.log('HELLO: ', this.accountList);
  }
  constructor(private _router: Router) {
    this.router = _router.url;
  }

  ngOnInit(): void {}
}
