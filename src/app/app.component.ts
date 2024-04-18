import { Component, OnInit } from '@angular/core';
import { TabItem } from './shared/domain';
import { Observable, filter, map } from 'rxjs';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  selectedIndex$: Observable<number>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedIndex$ = this.router.events.pipe(
      filter((ev: Event) => ev instanceof NavigationEnd),
      map((ev: NavigationEnd) => {
        const arr = ev.url.split('/');
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map((tab) => this.getSelectedIndex(tab))
    );
  }

  handleTabSelect(tab: TabItem) {
    this.router.navigate([tab.link]);
  }

  getSelectedIndex(tab: string) {
    return tab === 'recommend'
      ? 1
      : tab === 'category'
      ? 2
      : tab === 'chat'
      ? 3
      : tab === 'my'
      ? 4
      : 0;
  }
}
