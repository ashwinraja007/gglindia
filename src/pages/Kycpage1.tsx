import React from 'react';

const KycForm: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/india_kyc/"
        className="w-full h-full border-0"
        title="KYC Form"
        allow="camera; microphone; geolocation"
        sandbox="allow-forms allow-scripts allow-popups allow-top-navigation allow-same-origin allow-modals allow-downloads"
        onError={(e) => console.error('Iframe failed to load:', e)}
        onLoad={() => console.log('Iframe loaded successfully')}
      />
    </div>
  );
};

export default KycForm;
