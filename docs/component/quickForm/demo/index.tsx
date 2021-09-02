import React, { useState } from 'react';
import { QuickForm } from 'dumip';

export default () => {
  const [fileList, setFileList] = useState([]);
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
        {
          label: '照片',
          name: 'picture',
          type: 'UploadGrid',
          full: true,
          attributes: {
            fileList: fileList,
            onChange: ({ fileList }) => setFileList(fileList),
            action: '',
            listType: 'picture-card',
            // 是否展示下载&查看&删除按钮
            showDownloadIcon: false,
            showPreviewIcon: true,
            showRemoveIcon: true,
          },
        },
      ]}
    />
  );
};
