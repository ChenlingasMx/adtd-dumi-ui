import React from 'react';
import { ButtonGroupPro } from 'dumip';

export default () => {
  return (
    <ButtonGroupPro
      button={[
        {
          type: 'primary',
          label: '新增',
          onClick: () => {},
        },
        {
          label: 'Menu',
          type: 'primary',
          menu: [
            {
              key: '1',
              label: '新增2',
              onClick: () => {},
            },
            {
              key: '2',
              label: '新增3',
              onClick: () => {},
              disabled: true,
            },
          ],
        },
      ]}
    />
  );
};
