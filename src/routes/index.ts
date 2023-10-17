import { lazy } from 'react';
import { LazyComponent } from '@/components';

// layout 组件不做懒加载
import Layout from '@/layouts';

const Home = lazy(() /** 首页 */ => import('@/pages/home'));
const Demo = lazy(() /** demo页面 */ => import('@/pages/demo'));
const GameDetail = lazy(() /** 游戏详情页面 */ => import('@/pages/gameDetail'));
const LoginSign = lazy(() /** 游戏登陆注册页面 */ => import('@/pages/loginSign'));

export const routes = [
  {
    path: '/',
    element: LazyComponent({ lazyChildren: Layout }),
    children: [
      {
        path: '',
        element: LazyComponent({ lazyChildren: Home }),
      },
      {
        path: 'demo',
        element: LazyComponent({ lazyChildren: Demo }),
      },
      {
        path: 'gameDetail',
        element: LazyComponent({ lazyChildren: GameDetail }),
      },
      {
        path: 'logSign',
        element: LazyComponent({ lazyChildren: LoginSign }),
      },
    ],
  },
];
