import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scroll-tab',
  templateUrl: './scroll-tab.component.html',
  styleUrls: ['./scroll-tab.component.css'],
})
export class ScrollTabComponent
  implements
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnInit,
    OnDestroy
{
  @Input() menus: TopMenu[];
  @Input() titleActiveColor: string = 'brown';
  @Input() titleColor: string = 'blue';
  @Input() backgroundColor: string = '#fff';
  @Input() indicatorColor: string = 'brown';
  @Output() tabSelected = new EventEmitter<TopMenu>();
  selectedIndex = -1;

  constructor() {}

  // 组件销毁
  ngOnDestroy(): void {
    // console.log('组件销毁');
  }

  // 组件视图脏值检测
  ngAfterViewChecked(): void {
    // console.log('组件视图脏值检测');
  }

  // 组件初始化
  ngOnInit(): void {
    // console.log('组件初始化');
  }

  // 视图初始化完成
  ngAfterViewInit(): void {
    // console.log('视图初始化完成');
  }

  // 插槽内容脏值检测
  ngAfterContentChecked(): void {
    // console.log('插槽内容脏值检测');
  }

  // 插槽内容初始化
  ngAfterContentInit(): void {
    // console.log('插槽内容初始化');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('组件输入属性变化', changes);
  }

  ngDoCheck(): void {
    // console.log('脏值检测');
  }

  handleSelect(i: number) {
    this.selectedIndex = i;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

  trackByItem(_: number, item: TopMenu) {
    return item.title;
  }
}
