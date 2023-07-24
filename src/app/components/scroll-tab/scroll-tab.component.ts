import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scroll-tab',
  templateUrl: './scroll-tab.component.html',
  styleUrls: ['./scroll-tab.component.css'],
})
export class ScrollTabComponent {
  @Input() menus: TopMenu[];
  @Output() tabSelected = new EventEmitter<TopMenu>();
  selectedIndex = -1;

  constructor() {}

  handleSelect(i: number) {
    this.selectedIndex = i;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

  trackByItem(_: number, item: TopMenu) {
    return item.title;
  }
}
