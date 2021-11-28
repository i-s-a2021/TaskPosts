import { Component, OnInit } from '@angular/core';
import { TopCard } from '../../../model/topCard-model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  items: Array<TopCard> = [];

  orders_count = 10;
  reviews_count = 150;
  clicks_count = 430;
  shares_count = 43;

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        imgSrc: 'assets/images/card-1.jpg',
        name: 'Understanding',
        description: 'In-depth Knowledge and experince make it possible to solve problems.',
        charge: 'More'
      },
      {
        imgSrc: 'assets/images/card-2.jpg',
        name: 'Planing',
        description: 'In-depth Knowledge and experince make it possible to solve problems.',
        charge: 'More'
      },
      {
        imgSrc: 'assets/images/card-3.jpg',
        name: 'Implementing',
        description: 'In-depth Knowledge and experince make it possible to solve problems.',
        charge: 'More'
      }
    ]
  }

}
