import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageSlider, TopMenu } from 'src/app/shared/components';
import { Ad, Product } from 'src/app/shared/domain';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  menus: TopMenu[] = [
    {
      id: 1,
      title: '热门',
      link: 'hot',
    },
    {
      id: 2,
      title: '男装',
      link: 'men',
    },
    {
      id: 3,
      title: '百货',
      link: 'department',
    },
    {
      id: 4,
      title: '运动',
      link: 'sports',
    },
    {
      id: 5,
      title: '手机',
      link: 'mobile',
    },
    {
      id: 6,
      title: '家纺',
      link: 'textile',
    },
    {
      id: 7,
      title: '食品',
      link: '',
    },
    {
      id: 8,
      title: '电器',
      link: '',
    },
    {
      id: 9,
      title: '鞋包',
      link: '',
    },
    {
      id: 10,
      title: '汽车',
      link: '',
    },
    {
      id: 11,
      title: '水果',
      link: '',
    },
    {
      id: 12,
      title: '电脑',
      link: '',
    },
    {
      id: 13,
      title: '内衣',
      link: '',
    },
    {
      id: 14,
      title: '家装',
      link: '',
    },
    {
      id: 15,
      title: '母婴',
      link: '',
    },
    {
      id: 16,
      title: '美妆',
      link: '',
    },
  ];

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

  ads: Ad[] = [
    {
      imageUrl:
        'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
      link: '',
    },
  ];

  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getTabs() {
    return this.menus;
  }

  getChannels() {
    this.http
      .get<Channel[]>('http://zhangblog.cn:7001/recommend/banner')
      .subscribe((res) => {
        console.log('1111', res);
      });
    return this.channels;
  }

  _getChannels() {
    return this.http.get<Channel[]>(
      'http://zhangblog.cn:7001/recommend/banner'
    );
  }

  getBanners() {
    return this.imageSliders;
  }

  getAdByTab(tab: string) {
    return this.ads;
  }

  getProductsByTab(tab: string) {
    return this.products;
  }
}

export interface Channel {
  id: number;
  img: string;
  title: string;
  link: string;
}
