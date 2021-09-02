---
group:
  title: QuickForm 快速生成表单
nav:
  title: '组件'
  path: /components
---

# QuickForm

快速生成表单组件

## 代码演示

### 基础用法

<code src="./demo/index.tsx" />

## API

```ts
interface ItemsProps<T> {
  defaultcolspan?: any;
  /** 表单元素标题 */
  label: string;
  /** 表单名称 antd from 组件 getFieldDecorator 第一个参数 */
  name: string;
  /** 表单初始值 */
  initialValue?: string | any;
  /** 表单是否独占一行  */
  full?: boolean;
  /** 表单隐藏  */
  hideInForm?: boolean;
  /** input select 等表单组件属性集合 具体参考 antd  */
  attributes?: T | any;
  type?: string | undefined;
  options?:
    | Array<{ label: string | number | undefined; value: string | number }>
    | []
    | undefined;
  span?: number;
}

export interface QuickFormProps<Values> extends FormProps<Values> {
  /** 表单集合 */
  formDatas: Array<ItemsProps<object>>;
  /** antd collapse 组件属性集合 */
  collapseAttributes?: Object;
  /** antd collapse.panel 组件属性集合 */
  panelAttributes?: Object;
  /** 折叠表单下是否初始化选中面板 */
  visible?: boolean;
  /** 表单单行排列 */
  colspan?: number;
  /** 组件头部标题 */
  header?: React.ReactNode | any;
  /** 自定义表单栅格宽度占比,参照 antd 栅格布局 */
  defaultFormItemLayout?: Object;
  /** 自定义表单排列方式 */
  defaultFormLayout?: FormLayout;
  /** 尺寸,参照 antd */
  size?: any;
  /** 表单类型:modal&cardform&CardPro */
  type?: string;
  /** antd collapse.panel 自定义渲染每个面板右上角的内容 */
  extra?: any;
}
```
