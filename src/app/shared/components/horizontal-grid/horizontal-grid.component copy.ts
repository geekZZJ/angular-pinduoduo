import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Confirmable, Emoji } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
})
export class HorizontalGridComponent implements OnInit {
  private _username = '';
  @Output() usernameChange = new EventEmitter();
  @Emoji() result = 'Hello';

  constructor() {}

  ngOnInit() {}

  @Input()
  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
    this.usernameChange.emit(value);
  }

  handleInput(event: any) {
    this.username = event.target.value;
  }

  @Confirmable('确定执行？')
  handleClick() {
    console.log('3333');
  }
}
