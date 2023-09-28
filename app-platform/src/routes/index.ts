import { lazy } from 'react';
import { LazyComponent } from '@/components';

// layout 组件不做懒加载
import Layout from '@/layouts';

const Home = lazy(() /** 首页 */ => import('@/pages/home'));
const Demo = lazy(() /** demo页面 */ => import('@/pages/demo'));

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
    ],
  },
];