import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, HomeService } from '../services';
import { Observable, Subscription, filter, map } from 'rxjs';
import { Ad, Product } from 'src/app/shared/domain';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
})
export class HomeDetailComponent implements OnInit, OnDestroy {
  channels: Channel[] = [];
  channels$: Observable<Channel[]>;
  tabLink: string;
  sub: Subscription;
  ad: Ad;
  products: Product[];

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        filter((params) => params.has('tabLink')),
        map((params) => params.get('tabLink'))
      )
      .subscribe((tabLink) => {
        console.log('路径参数', tabLink);
        this.tabLink = tabLink || '';
      });
    this.sub = this.route.queryParamMap.subscribe((res) => {
      console.log('查询参数', res);
    });
    // this.channels = this.homeService.getChannels();
    this.channels$ = this.homeService._getChannels();
    this.ad = this.homeService.getAdByTab(this.tabLink)[0];
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getProducts() {
    this.products = this.homeService.getProductsByTab(this.tabLink);
  }
}
