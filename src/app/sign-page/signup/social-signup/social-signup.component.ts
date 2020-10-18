import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-signup',
  templateUrl: './social-signup.component.html',
  styleUrls: ['./social-signup.component.css'],
})
export class SocialSignupComponent implements OnInit {
  @Input() signType: String;

  constructor() {}

  ngOnInit(): void {}
}
