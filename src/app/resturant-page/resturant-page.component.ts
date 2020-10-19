import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resturant-page',
  templateUrl: './resturant-page.component.html',
  styleUrls: ['./resturant-page.component.css'],
})
export class ResturantPageComponent implements OnInit {
  @Input() resturantName: string;
  RRName = 'BuffaloBurger';
  constructor(private router: Router) {}
  cartItems = {};
  cartItemsNo: number = 0;

  resturants = {
    BuffaloBurger: {
      name: 'Buffalo Burger',
      desc:
        'More than 8 years being the best homemade burger in town targeting different types of customers starting from the light on diet eaters all the way to the heavy food lovers. Customizing fresh fast food for each, and interacting with all targeted customers. Buffalo Burger is made 100% from real beef, where the last bite you take out of that sandwich would leave you wanting for more. The buffalo beef burger is prepared neatly and delivered to you as it is in different sizes and kilograms. No soybean, no microwaves, no can openers, nothing artificial, just THE REAL DEAL.',
      img: 'buffaloburger.jpg',
    },
  };

  buffaloBurgerMenuArr = {
    Burgers: [
      {
        name: 'Old School Sandwich',
        desc:
          'Pure beef patty, cheddar cheese, and our signature Buffalo sauce.',
        price: '86',
        img: 'oldschool.jpg',
      },
      {
        name: 'Umami Sandwich',
        desc:
          'A juicy beef patty with hand-breaded fried jalapeños, cheddar cheese and hollandaise sauce. ',
        price: '68',
        img: 'umami.jpg',
      },
      {
        name: 'Urban X Sandwich',
        desc:
          'A juicy burger patty with cheddar cheese, clean cut of beef bacon and crispy onion rings ',
        price: '71',
        img: 'urbanx.jpg',
      },
      {
        name: 'Animal Style Sandwich',
        desc:
          'Crispy onion rings, topped with semi Dijon mustard, cheddar cheese and creamy buffalo sauce ',
        price: '71',
        img: 'animalstyle.jpg',
      },
    ],
    Chicken: [
      {
        name: 'Old School Chicken Sandwich',
        desc:
          'Pure Chicken patty, cheddar cheese, and our signature Buffalo sauce.',
        price: '86',
        img: 'oldschool.jpg',
      },
      {
        name: 'Umami Chicken Sandwich',
        desc:
          'A juicy Chicken patty with hand-breaded fried jalapeños, cheddar cheese and hollandaise sauce. ',
        price: '68',
        img: 'umami.jpg',
      },
      {
        name: 'Animal Style Chicken Sandwich',
        desc:
          'Crispy onion rings, topped with semi Dijon mustard, cheddar cheese and creamy buffalo sauce ',
        price: '71',
        img: 'animalstyle.jpg',
      },
    ],
  };

  ngOnInit(): void {}
  checkOut() {
    this.router.navigateByUrl('/checkout', {
      state: { data: this.cartItems },
    });
  }
  public addItem(item: object): void {
    /* Increment cartitem Number. add item to cartItems and add quantity property. */
    this.cartItemsNo++;
    if ((item as any).name in this.cartItems) {
      this.cartItems[(item as any).name]['quantity'] += 1;
    } else {
      this.cartItems[(item as any).name] = { ...item, quantity: 1 };
    }
  }
}
