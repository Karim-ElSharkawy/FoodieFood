import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturant-header',
  templateUrl: './resturant-header.component.html',
  styleUrls: ['./resturant-header.component.css'],
})
export class ResturantHeaderComponent implements OnInit {
  @Input() resturantName: string;
  @Input() resturantImg: string;
  @Input() resturantDesc: string;

  constructor() {}

  ngOnInit(): void {}
}
