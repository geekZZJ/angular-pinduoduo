import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Channel {
  id: number;
  img: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
})
export class HomeDetailComponent implements OnInit {
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
    {
      id: 5,
      img: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
      title: '限时秒杀',
      link: '',
    },
    {
      id: 6,
      img: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
      title: '限时秒杀',
      link: '',
    },
    {
      id: 7,
      img: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
      title: '限时秒杀',
      link: '',
    },
    {
      id: 8,
      img: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
      title: '限时秒杀',
      link: '',
    },
    {
      id: 9,
      img: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
      title: '限时秒杀',
      link: '',
    },
  ];
  tabLink: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((res) => {
      console.log('路径参数', res);
      this.tabLink = res.get('tabLink');
    });
    this.route.queryParamMap.subscribe((res) => {
      console.log('查询参数', res);
    });
  }
}
