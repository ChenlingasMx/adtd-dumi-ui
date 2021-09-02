import React, { useState } from 'react';
import { UploadGrid } from 'dumip';
import { PlusOutlined } from '@ant-design/icons/lib';

export default () => {
  const [fileList, setFileList] = useState([]);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div>Upload</div>
    </div>
  );
  return (
    <div>
      <UploadGrid
        action=""
        listType="picture-card"
        fileList={fileList}
        onChange={({ fileList }) => setFileList(fileList)}
      >
        {fileList.length >= 9 ? null : uploadButton}
      </UploadGrid>
    </div>
  );
};
