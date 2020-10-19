import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent implements OnInit {
  checkoutItems: Object[];

  valueChange(name: string, index: number) {
    /* Calculate new price by getting the price of item and
    multiply by quantity for new price */

    var priceper = this.checkoutItems[name]['price'];
    var quantity = document.getElementsByClassName('quantity')[index]['value'];
    document.getElementsByClassName('priceloc')[index].innerHTML =
      String(priceper * quantity) + ' Egp';
  }

  doneCheckout() {
    /* Loop over Price Elements by Class then get textContent and
     remove 'EGP' and use Number in summation of final price */

    var priceElems = document.getElementsByClassName('priceloc');
    var finalPrice = 0;

    for (let i = 0; i < priceElems.length; i++) {
      console.log(priceElems[i].textContent.replace(/\D/g, ''));
      finalPrice += parseInt(priceElems[i].textContent.replace(/\D/g, ''));
      console.log('FinalPrice: ', finalPrice);
    }
    confirm(
      'You ordered ' +
        priceElems.length +
        ' items with a total price of ' +
        finalPrice +
        ' Egp. Thank you for ordering!'
    );

    this.router.navigateByUrl('/home');
  }

  removeRowOfIndex(name: string, index: number) {
    // Remove Row by using remove on table row of certain ID set in HTML.

    if (confirm('Are you sure you want to remove ' + name + '?')) {
      document.getElementById('tb-row' + (index + 1)).remove();
    }
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkoutItems = history.state.data;
  }
}
