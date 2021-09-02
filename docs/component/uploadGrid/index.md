---
group:
  title: UploadGrid 可拖拽上传组件
nav:
  title: '组件'
  path: /components
---

# UploadGrid

可拖拽上传组件

## 代码演示

### 基础用法

<code src="./demo/index.tsx" />

### Props

组件继承 [`antd Upload`](https:ant.design/components/form-cn/#header)

```ts
export type Props = {
  onChange: (params: { fileList: UploadFile[] }) => void;
  /**是否可以拖拽*/
  useDragHandle?: boolean;
  children?: ReactNode;
} & UploadProps &
  UploadListProps;
```
