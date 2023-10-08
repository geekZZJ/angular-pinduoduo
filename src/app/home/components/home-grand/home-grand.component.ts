import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css'],
})
export class HomeGrandComponent implements OnInit {
  obj = {
    productId: 2,
    productName: '测试',
  };
  price = 123.456;
  date = new Date('2023-10-06');

  constructor() {}

  ngOnInit() {}
}
