---
group:
  title: ButtonGroupPro 按钮组
nav:
  title: '组件'
  path: /components
---

# ButtonGroupPro

按钮组

## 代码演示

### 基础用法

<code src="./demo/index.tsx" />

### Props

组件继承 antd [`Button`](https://ant.design/components/button-cn/#header)

```ts
interface MenusOptionProps extends Omit<ButtonProps, 'type'>, ButtonGroupProps {
  label?: string | React.ReactNode;
  option?: Array<MenusOptionProps>;
  menu?: Array<MenusProps>;
  key?: number;
  ButtonandDropdown?: string | number;
  type?: ButtonType;
  render?: (...arg: any) => React.ReactNode;
  badge?: number | string;
}

export interface ButtonGroupProProps {
  button: Array<MenusOptionProps>;
  className?: string;
}
```
