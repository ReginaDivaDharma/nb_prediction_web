import React, { useState } from 'react';
import { Upload, Button, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface UploadFileProps {
  onFileChange: (file: File) => void;
}

const UploadFile: React.FC<UploadFileProps> = ({ onFileChange }) => {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = (info: any) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1); // Limit to one file
    setFileList(fileList);

    if (info.file.status === 'done') {
      const file = fileList[0].originFileObj;
      onFileChange(file);
    }
  };

  const customRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  return (
    <Card
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '400px',
      width: '450px',
      paddingTop: '20px', 
      backgroundColor: '#6D9773',
      alignContent: 'center'
    }}
  >
    <h1
      style={{
        color: 'white'
      }}
    >Please Insert Your CSV File!</h1>
    <p style={{
      color: 'white',
      paddingBottom: '20px'
    }}>
      How to use the machine learning website? <tr></tr>
      1. Upload the CSV <tr></tr>
      2. See the result on the right side!
    </p>
    <Upload
      fileList={fileList}
      onChange={handleChange}
      customRequest={customRequest}
      maxCount={1}
    >
      <Button 
      style={{
        color: '#0C3B2E',
      }}
      icon={<UploadOutlined />}>Upload File</Button>
    </Upload>
  </Card>
  
  );
};

export default UploadFile;
