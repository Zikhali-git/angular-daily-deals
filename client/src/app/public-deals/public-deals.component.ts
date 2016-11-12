import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth.service';
import { Deal } from '../shared/deal';
import { DealService } from '../shared/deal.service';

@Component({
  selector: 'public-deals',
  templateUrl: './public-deals.component.html',
  styleUrls: ['./public-deals.component.css']
})
export class PublicDealsComponent implements OnInit {
  publicDeals: Deal[];
  error: any;

  constructor(
    private authService: AuthService,
    private dealService: DealService
  ) { }

  // When this component is loaded, we'll call the dealService and get our public deals.
  ngOnInit(): void {
    this.getPublicDeals();
  }

  getPublicDeals(): void {
    this.dealService.getPublicDeals()
      .then((deals) => {
        // console.log(deals);
        return this.publicDeals = deals;
      })
      .catch(error => this.error = error);
  }

  purchase(item) {
    if (this.authService.loggedIn()) {
      alert('You bought the: ' + item.name);
    } else {
      alert('You must log in to buy: ' + item.name);
    }
  }

}
