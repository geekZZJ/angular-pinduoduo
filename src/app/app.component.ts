import { Component } from '@angular/core';
import { ImageSlider, TopMenu } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
  username = '111';

  handleSelect(item: TopMenu) {
    console.log(item);
  }
}
