---
group:
  title: CardPro 卡片
nav:
  title: '组件'
  path: /components
---

# CardPro

去边框卡片组件

## 代码演示

### 基础用法

<code src="./demo/index.tsx" />

## API

组件继承 antd [`Card`](https://ant.design/components/card-cn/#header)

```ts
interface CardProProps extends CardProps {
  children?: React.ReactNode;
  className?: string;
}
```
