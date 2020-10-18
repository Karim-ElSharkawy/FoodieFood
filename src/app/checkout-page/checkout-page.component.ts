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
    var priceper = this.checkoutItems[name]['price'];
    var quantity = document.getElementsByClassName('quantity')[index]['value'];
    document.getElementsByClassName('priceloc')[index].innerHTML =
      String(priceper * quantity) + ' Egp';
  }
  doneCheckout() {
    var priceElems = document.getElementsByClassName('priceloc');
    var finalPrice = 0;

    for (let i = 0; i < priceElems.length; i++) {
      finalPrice += parseInt(priceElems[i].textContent.split(' ')[1]);
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
  removeRowOfIndex(index) {
    if (
      confirm(
        'Are you sure you want to remove ' +
          (this.checkoutItems[index - 1] as any).name +
          '?'
      )
    ) {
      document.getElementById('tb-row' + index).remove();
    }
  }
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkoutItems = history.state.data;
  }
}
