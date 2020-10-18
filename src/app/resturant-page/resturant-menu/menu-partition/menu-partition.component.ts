import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-partition',
  templateUrl: './menu-partition.component.html',
  styleUrls: ['./menu-partition.component.css'],
})
export class MenuPartitionComponent implements OnInit {
  @Input() itemArr: Object[];
  @Input() title: string;
  @Output() sendItem: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {}
  bubbleItemSent(item: object) {
    this.sendItem.emit(item);
  }

  ngOnChanges(): void {
    //this.sendItem.emit(this.itemArr);
  }
  ngOnInit(): void {}
}
