import React from 'react';
import { QuickForm } from 'dumip';

export default () => {
  return (
    <QuickForm
      formDatas={[
        {
          label: '备注',
          name: 'remark',
          type: 'input',
          attributes: {
            allowClear: true,
          },
        },
        {
          label: '水果',
          name: 'fruit',
          type: 'select',
          options: [{ label: 'apple', value: 1 }],
          attributes: {
            allowClear: true,
            showSearch: true,
          },
        },
        {
          label: '蔬菜',
          name: 'id1',
          type: 'checkbox',
          options: [
            { label: '青菜', value: 1 },
            { label: '冬瓜', value: 2 },
          ],
          attributes: {},
        },
        {
          label: '水果2',
          name: 'fruit2',
          type: 'autoComplete',
          options: [
            { label: 'apple', value: 1 },
            { label: 'orange', value: 2 },
          ],
          attributes: {
            allowClear: true,
            showSearch: true,
          },
        },
      ]}
    />
  );
};
