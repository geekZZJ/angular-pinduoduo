import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, HomeService } from '../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
})
export class HomeDetailComponent implements OnInit {
  channels: Channel[] = [];
  tabLink: string | null;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe((res) => {
    //   console.log('路径参数', res);
    //   this.tabLink = res.get('tabLink');
    // });
    // this.route.queryParamMap.subscribe((res) => {
    //   console.log('查询参数', res);
    // });
    this.channels = this.homeService.getChannels();
  }
}
