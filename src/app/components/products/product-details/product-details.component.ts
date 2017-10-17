import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductsService, Review} from '../../../services/products/products.service';
import {Subscription} from 'rxjs/Subscription';
import {BidService} from '../../../services/bid-service/bid.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: Product;
  reviews: Review[];

  currentBid: number;
  newComment: string;
  newRating: number;

  isReviewHidden: boolean = true;
  isWatching: boolean = false;

  private subscription: Subscription;

  constructor(
     route: ActivatedRoute,
     productService: ProductsService,
     private bidService: BidService) {

    const productId = Number(route.snapshot.params['productId']);

    productService
       .getProductById(productId)
       .subscribe(
          product => {
            this.product = product;
            this.currentBid = product.price;
          },
          error => console.error(error));

    productService
       .getReviewsForProduct(productId)
       .subscribe(
          reviews => this.reviews = reviews,
          error => console.error(error));
  }

  ngOnInit() {
  }

  toggleWatchProduct() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
      this.isWatching = false;
    } else {
      this.isWatching = true;
      this.subscription = this.bidService.watchProduct(this.product.id)
         .subscribe(
            products => this.currentBid = products.find((p: any) => p.productId === this.product.id).bid,
            error => console.log(error));
    }
  }

  /* add a router guard to unsubscribe on deactivate*/

  ngOnDestroy(): any {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addReview() {
    let review = new Review(0, this.product.id, new Date(), 'Anonymous',
       this.newRating, this.newComment);
    this.reviews = [...this.reviews, review];
    this.product.rating = this.averageRating(this.reviews);

    this.resetForm();
  }

  averageRating(reviews: Review[]) {
    let sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }

}
