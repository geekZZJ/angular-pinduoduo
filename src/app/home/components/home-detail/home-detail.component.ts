import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, HomeService } from '../services';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
})
export class HomeDetailComponent implements OnInit, OnDestroy {
  channels: Channel[] = [];
  channels$: Observable<Channel[]>;
  tabLink: string | null;
  sub: Subscription;

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
        this.tabLink = tabLink;
      });
    this.sub = this.route.queryParamMap.subscribe((res) => {
      console.log('查询参数', res);
    });
    // this.channels = this.homeService.getChannels();
    this.channels$ = this.homeService._getChannels();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
