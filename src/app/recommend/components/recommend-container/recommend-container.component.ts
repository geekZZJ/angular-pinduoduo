import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/components/services';
import { Ad, Product } from 'src/app/shared/domain';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RecommendContainerComponent implements OnInit {
  ad: Ad;
  products: Product[];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.ad = this.homeService.getAdByTab('men')[0];
    this.products = this.homeService.getProductsByTab('men');
  }

}
