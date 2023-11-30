import { Button } from 'antd';
import React, { useRef } from 'react';

const FileUploadButton = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
      <a onClick={handleButtonClick}>Upload Image</a>
    </div>
  );
};

export default FileUploadButton;