import React from 'react';
import { Input } from 'antd';
import { FormOptionsProps } from '../index';
import { useController, useFormContext } from 'react-hook-form';

function WidgetsItem({
  // formDatas 表单项参数
  name: labelName,
  type,
  render,
  initValue,
  rules,
  options,
  attributes,
  // 组件api监听表单值变化
  onItemChange,
}: any) {
  const { control, trigger } = useFormContext();

  const {
    field: { onChange, name, onBlur, value, ref },
  } = useController({
    name: labelName,
    control,
    rules: rules,
    defaultValue: initValue,
  });

  const widgetsProps = {
    name: name,
    ref: ref,
    onChange: (value: any) => {
      onChange(value);
      trigger(name);
      onItemChange?.(name, value);
    },
    onBlur: onBlur(),
    value: value,
    ...attributes,
  };

  const dom = () => {
    if (type === 'input') {
      return (
        <div style={{ flex: 1 }}>
          <Input
            ref={ref}
            name={name}
            value={value || ''}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChange(event);
              trigger(name);
              onItemChange?.(name, event);
            }}
            onBlur={() => {
              onBlur();
              trigger(name);
            }}
            {...attributes}
          />
        </div>
      );
    }
    // 自定义组件
    if (type === 'render') {
      return render?.({ name, ref, onChange, onBlur });
    }
    return null;
  };

  return dom();
}

export default WidgetsItem;
