import React from 'react';

const KycForm: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/kyc-proxy/"
        className="w-full h-full border-0"
        title="KYC Form"
        // No sandbox - your proxied content needs full access to function
      />
    </div>
  );
};

export default KycForm;
