import React from 'react';

const KycForm: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/kyc-proxy/"
        className="w-full h-full border-0"
        title="KYC Form"
        sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation allow-top-navigation-by-user-activation"
      />
    </div>
  );
};

export default KycForm;
