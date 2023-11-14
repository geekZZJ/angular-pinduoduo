import { formatDate } from '@angular/common';
import {
  Component,
  OnInit,
  AfterViewChecked,
  NgZone,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, AfterViewChecked {
  @ViewChild('timeRef', { static: true }) timeRef: ElementRef;
  _title: string;
  _time: number;

  public get title(): string {
    console.log('脏值检测');
    return this._title;
  }

  public get time(): number {
    return this._time;
  }

  constructor(private ngZone: NgZone, private rd2: Renderer2) {
    this._title = 'hi';
  }

  ngAfterViewChecked(): void {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.rd2.setProperty(
          this.timeRef.nativeElement,
          'innerText',
          formatDate(Date.now(), 'HH:mm:ss', 'zh-Hans')
        );
      }, 100);
    });
  }

  ngOnInit() {}

  handleClick() {}
}
