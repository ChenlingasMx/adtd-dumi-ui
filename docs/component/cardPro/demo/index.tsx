import React from 'react';
import { CardPro } from 'antd-dumi-ui';
import { Image } from 'antd';

export default () => {
  return (
    <CardPro title="照片墙">
      <Image
        style={{ marginTop: 20 }}
        width={'100%'}
        src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
      />
    </CardPro>
  );
};
