import { Component, OnInit } from '@angular/core';
import { ImageSlider, TopMenu } from '../../../shared/components';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit() {
    this.menus = this.homeService.getTabs();
    this.imageSliders = this.homeService.getBanners();
  }

  handleTabSelect(item: TopMenu) {
    // console.log(item);
    this.router.navigate(['home', item.link]);
  }
}
