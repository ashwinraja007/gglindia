// src/pages/KycPage.tsx
import React from 'react';

const KycPage: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/india_kyc/"
        className="w-full h-full border-0"
        title="KYC Form"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default KycPage;
