import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal-signup',
  templateUrl: './normal-signup.component.html',
  styleUrls: ['./normal-signup.component.css'],
})
export class NormalSignupComponent implements OnInit {
  @ViewChild('f', { static: false }) signForm: NgForm;
  @Input() signType: string;
  @Output() sendAccDetails: EventEmitter<any> = new EventEmitter<any>();
  router: string;

  constructor(private _router: Router) {
    this.router = _router.url;
  }
  onSubmit() {
    console.log(this.signForm.value.username);
    let username = this.signForm.value.username;
    let password = this.signForm.value.password;
    this.sendAccDetails.emit({
      type: this.signType,
      username: username,
      password: password,
    });
    localStorage.setItem('LoggedIn', username);

    this.signForm.reset();

    this._router.navigateByUrl('/home');
  }
  ngOnInit(): void {}
}
