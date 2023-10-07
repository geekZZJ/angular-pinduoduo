import { Component, OnInit } from '@angular/core';
import { ImageSlider, TopMenu } from '../../../shared/components';
interface Channel {
  id: number;
  img: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
})
export class HomeContainerComponent implements OnInit {
  menus: TopMenu[] = [
    {
      title: '热门',
      link: '',
    },
    {
      title: '男装',
      link: '',
    },
    {
      title: '百货',
      link: '',
    },
    {
      title: '运动',
      link: '',
    },
    {
      title: '手机',
      link: '',
    },
    {
      title: '家纺',
      link: '',
    },
    {
      title: '食品',
      link: '',
    },
    {
      title: '电器',
      link: '',
    },
    {
      title: '鞋包',
      link: '',
    },
    {
      title: '汽车',
      link: '',
    },
    {
      title: '水果',
      link: '',
    },
    {
      title: '电脑',
      link: '',
    },
    {
      title: '内衣',
      link: '',
    },
    {
      title: '家装',
      link: '',
    },
    {
      title: '母婴',
      link: '',
    },
    {
      title: '美妆',
      link: '',
    },
  ];
  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'http://zhangblog.cn:7001/public/banner/banner1.jpg',
      link: '',
      caption: '',
    },
    {
      imgUrl: 'http://zhangblog.cn:7001/public/banner/banner2.jpg',
      link: '',
      caption: '',
    },
    {
      imgUrl: 'http://zhangblog.cn:7001/public/banner/banner3.jpg',
      link: '',
      caption: '',
    },
  ];
  // username = '111';
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

  constructor() {}

  ngOnInit() {}

  handleSelect(item: TopMenu) {
    console.log(item);
  }
}
