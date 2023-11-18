import { Component, Input, OnInit } from '@angular/core';
import { Observable, interval, map, takeWhile } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit {
  @Input() startDate: Date = new Date();
  @Input() futureDate: Date;
  countDown$: Observable<string>;
  constructor() {}

  ngOnInit() {
    this.countDown$ = interval(1000).pipe(
      map((num) => this.diffInSec(this.startDate, this.futureDate) - num),
      takeWhile((gap) => gap >= 0),
      map((sec) => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor((sec / 3600) % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60),
      })),
      map((date) => `${date.hour}:${date.minute}:${date.second}`)
    );
  }

  diffInSec = (start: Date, future: Date): number => {
    const diff = future.getTime() - start.getTime();
    return Math.floor(diff / 1000);
  };
}
