// src/pages/KycPage.tsx - FINAL VERSION
import React, { useState } from 'react';

const KycPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-screen relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-700">Loading KYC Form...</p>
          </div>
        </div>
      )}
      
      <iframe
        src="/india_kyc/"
        className="w-full h-full border-0"
        title="KYC Form"
        onLoad={() => setLoading(false)}
        // No sandbox - same-origin trusted content
        // Security handled by server-side validation and headers
      />
    </div>
  );
};

export default KycPage;
