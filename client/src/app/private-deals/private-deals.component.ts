import { Component, OnInit } from '@angular/core';

import { Deal } from '../shared/deal';
import { DealService } from '../shared/deal.service';

@Component({
  selector: 'private-deals',
  templateUrl: './private-deals.component.html',
  styleUrls: ['./private-deals.component.css']
})
export class PrivateDealsComponent implements OnInit {
  privateDeals: Deal[];
  error: any;

  constructor(
    private dealService: DealService
  ) { }

  ngOnInit(): void {
    this.getPrivateDeals();
  }

  getPrivateDeals(): void {
    this.dealService.getPrivateDeals()
      .then(deals => this.privateDeals = deals)
      .catch(error => this.error = error);
  }

  purchase(item) {
    alert("You bought the: " + item.name);
  }
}
