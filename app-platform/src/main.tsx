import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { routes } from '@/routes';
import { zh, en } from '@/locales';
import { lsGetItem, initRem } from '@/utils';
import '@/styles/global.scss';

// 设置多语言
const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
};

// 初始化多语言包
i18n.use(initReactI18next).init({
  resources,
  lng: lsGetItem('lang') || 'zh',
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  },
});

const container = document.getElementById('root');

const root = createRoot(container);

// 适配
initRem();

root.render(
  <React.Suspense fallback={null}>
    <RouterProvider router={createBrowserRouter(routes)} />
  </React.Suspense>
);
