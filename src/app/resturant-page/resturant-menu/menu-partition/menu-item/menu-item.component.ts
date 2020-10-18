import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {
  @Input() index: number;
  @Input() menuSectionNumber: number;
  @Input() itemObj;
  @Output() cartItemPicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
  ngOnChanges(): void {}
  setItemInCart() {
    this.cartItemPicked.emit(this.itemObj);

    document
      .getElementsByClassName('item-section')
      [this.index].classList.add('chosen-item');
  }
  ngOnInit(): void {}
}
