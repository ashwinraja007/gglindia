// src/pages/KycPage.tsx
import React, { useState } from 'react';

const KycPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="w-full h-screen relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p>Loading KYC Form...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-50">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Failed to Load Form</h2>
            <p className="mb-4">The KYC form could not be loaded.</p>
            <a 
              href="/india_kyc/" 
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              target="_blank"
            >
              Open in New Tab
            </a>
          </div>
        </div>
      )}
      
      <iframe
        src="/india_kyc/"
        className="w-full h-full border-0"
        title="KYC Form"
        style={{ border: 'none' }}
        onLoad={() => {
          console.log('Iframe loaded successfully');
          setLoading(false);
        }}
        onError={() => {
          console.error('Iframe failed to load');
          setError(true);
          setLoading(false);
        }}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
      />
    </div>
  );
};

export default KycPage;
