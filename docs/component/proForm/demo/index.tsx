import React from 'react';
import { ProForm } from 'dumip';

export default () => {
  return (
    <ProForm
      title="测试QuickForm"
      onItemChange={async (name, value) =>
        console.log('name', name, 'value', value)
      }
      formDatas={[
        {
          type: 'input',
          name: 'firstName',
          label: '姓氏',
          attributes: {
            placeholder: '请输入姓氏',
          },
          rules: { required: '请输入姓氏' },
        },
        {
          type: 'input',
          name: 'lastName',
          label: '名字',
          attributes: {
            placeholder: '请输入名字',
          },
        },
      ]}
    />
  );
};
