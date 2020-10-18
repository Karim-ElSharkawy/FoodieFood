import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resturant-menu',
  templateUrl: './resturant-menu.component.html',
  styleUrls: ['./resturant-menu.component.css'],
})
export class ResturantMenuComponent implements OnInit {
  @Input() itemMenuArr: object;
  @Output() sendItem: EventEmitter<any> = new EventEmitter<any>();

  bubbleItemSent(item: object) {
    this.sendItem.emit(item);
  }

  constructor() {}

  ngOnInit(): void {}
}
