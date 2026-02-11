import { useState } from 'react';

const KycDetails = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              KYC Details
            </h1>
            <p className="text-lg text-gray-600">
              Please complete the KYC verification form below
            </p>
          </div>

          {/* Security Warning */}
          <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-amber-800">
                  <strong>Security Notice:</strong> This form is currently loaded from a non-secure connection (HTTP). 
                  We recommend the site administrator enable SSL/HTTPS for enhanced security.
                </p>
              </div>
            </div>
          </div>

          {/* Loading Indicator */}
          {!iframeLoaded && (
            <div className="flex justify-center items-center h-[600px] bg-white rounded-xl shadow-lg">
              <div className="text-center">
                <div className="relative">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-600 mx-auto mb-4"></div>
                </div>
                <p className="text-gray-600 font-medium">Loading KYC Form...</p>
                <p className="text-gray-400 text-sm mt-2">Please wait a moment</p>
              </div>
            </div>
          )}

          {/* Iframe Container */}
          <div 
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-opacity duration-300 ${
              iframeLoaded ? 'opacity-100' : 'opacity-0 h-0'
            }`}
          >
            <iframe
              src="http://www.amassdubai.com/india_kyc/"
              title="KYC Verification Form"
              className="w-full border-0"
              style={{ 
                minHeight: '900px',
                height: '100vh'
              }}
              onLoad={() => setIframeLoaded(true)}
              onError={() => {
                console.error('Failed to load KYC form');
                setIframeLoaded(true);
              }}
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation allow-popups-to-escape-sandbox"
              loading="lazy"
            />
          </div>

          {/* Help Section */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
            <p className="text-sm text-blue-800 mb-3">
              If you're experiencing issues viewing the form, you can open it in a separate window.
            </p>
            <a 
              href="http://www.amassdubai.com/india_kyc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in New Window
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycDetails;
