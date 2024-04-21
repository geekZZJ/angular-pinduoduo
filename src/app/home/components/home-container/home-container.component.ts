import { Component, OnInit } from '@angular/core';
import { ImageSlider, TopMenu } from '../../../shared/components';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
})
export class HomeContainerComponent implements OnInit {
  menus: TopMenu[] = [];
  imageSliders: ImageSlider[] = [];
  // username = '111';
  selectedTabLink: string;

  constructor(
    private router: Router,
    private homeService: HomeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menus = this.homeService.getTabs();
    this.imageSliders = this.homeService.getBanners();
    this.route.firstChild?.paramMap.subscribe((params) => {
      if (params.has('tabLink')) {
        this.selectedTabLink = params.get('tabLink') || '';
      }
    });
  }

  handleTabSelect(item: TopMenu) {
    // console.log(item);
    this.router.navigate(['home', item.link]);
  }
}
