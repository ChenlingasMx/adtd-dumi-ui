import { defineConfig } from 'dumi';
const env = process.env.NODE_ENV;

export default defineConfig({
  title: 'antd-dumi-ui',
  favicon:
    env === 'development'
      ? '/antd-dumi-ui/images/59959718.jpeg'
      : './images/59959718.jpeg',
  logo:
    env === 'development'
      ? '/antd-dumi-ui/images/59959718.jpeg'
      : './images/59959718.jpeg',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  history: {
    type: 'hash',
  },
  // Because of using GitHub Pages
  base: env === 'development' ? '/antd-dumi-ui' : './',
  publicPath: env === 'development' ? '/antd-dumi-ui/' : './',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi-template',
    },
  ],
  menus: {
    '/components': [
      {
        title: '通用',
        children: ['component/buttonGroup'],
      },
      {
        title: '数据展示',
        children: ['component/cardPro'],
      },
    ],
    '/guide': [
      {
        title: '开发指南',
        children: ['guide'],
      },
    ],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  // more config: https://d.umijs.org/config
});
