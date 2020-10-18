import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @Input() signType: string;
  @Output() sendAccData: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  bubbleAccData(accInfo: object) {
    this.sendAccData.emit(accInfo);
  }
  ngOnInit(): void {}
}
