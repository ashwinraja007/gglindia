import React from 'react';

const KycForm: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/kyc-proxy/"
        className="w-full h-full border-0"
        title="KYC Form"
        // No sandbox attribute for maximum compatibility
      />
    </div>
  );
};

export default KycForm;
