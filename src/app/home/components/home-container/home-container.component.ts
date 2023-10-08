import { Component, OnInit } from '@angular/core';
import { ImageSlider, TopMenu } from '../../../shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
})
export class HomeContainerComponent implements OnInit {
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

  constructor(private router: Router) {}

  ngOnInit() {}

  handleTabSelect(item: TopMenu) {
    // console.log(item);
    this.router.navigate(['home', item.link]);
  }
}
