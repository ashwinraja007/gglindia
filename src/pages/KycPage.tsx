import { useState } from 'react';

const KycDetails = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Use proxy in development, direct URL in production
  const formUrl = import.meta.env.DEV 
    ? '/kyc-form/' 
    : 'http://www.amassdubai.com/india_kyc/';

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

          {/* Security Warning - Only show in production */}
    

          {/* Error Message */}
          {hasError && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-800">
                    <strong>Error:</strong> Unable to load the KYC form. Please try opening it in a new window using the button below.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Loading Indicator */}
          {!iframeLoaded && !hasError && (
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
              iframeLoaded && !hasError ? 'opacity-100' : 'opacity-0 h-0'
            }`}
          >
            <iframe
              src={formUrl}
              title="KYC Verification Form"
              className="w-full border-0"
              style={{ 
                minHeight: '900px',
                height: '100vh'
              }}
              onLoad={() => {
                setIframeLoaded(true);
                setHasError(false);
              }}
              onError={() => {
                console.error('Failed to load KYC form');
                setHasError(true);
              }}
              // Remove sandbox attribute to allow full functionality
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
