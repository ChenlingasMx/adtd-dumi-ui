import { defineConfig } from 'dumi';

const repo = 'antd-dumi-ui';

export default defineConfig({
  title: repo,
  favicon: `/${repo}/images/59959718.jpeg`,
  logo: `/${repo}/images/59959718.jpeg`,
  outputPath: 'docs-dist',
  mode: 'doc',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi-template',
    },
  ],
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
