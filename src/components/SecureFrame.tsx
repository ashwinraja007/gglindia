import React from 'react';

interface SecureFrameProps {
  targetUrl: string;
  title?: string;
}

const SecureFrame: React.FC<SecureFrameProps> = ({ targetUrl, title }) => {
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <iframe
        src={targetUrl}
        title={title}
        className="w-full h-full"
        style={{ border: 'none' }}
        loading="lazy"
      />
    </div>
  );
};

export default SecureFrame;