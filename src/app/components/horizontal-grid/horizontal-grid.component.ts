import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
})
export class HorizontalGridComponent implements OnInit {
  private _username = '';
  @Output() usernameChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

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
}
