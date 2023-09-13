import { Component, OnInit } from '@angular/core';

interface Channel {
  id: number;
  img: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
})
export class HorizontalGridComponent implements OnInit {
  channels: Channel[] = [
    {
      id: 1,
      img: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
      title: '限时秒杀',
      link: '',
    },
    {
      id: 2,
      img: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
      title: '限时秒杀',
      link: '',
    },
    {
      id: 3,
      img: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
      title: '限时秒杀',
      link: '',
    },
    {
      id: 4,
      img: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
      title: '限时秒杀',
      link: '',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
