import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Loader2, ExternalLink, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KycPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState(0);

  const handleReload = () => {
    setIsLoading(true);
    setKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow pt-24 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
          <h1 className="text-2xl font-bold text-gray-800">KYC Verification</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleReload}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reload
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="bg-brand-navy hover:bg-brand-navy/90"
              onClick={() => window.open('http://www.amassdubai.com/india_kyc/', '_blank')}
            >
              Open in New Window <ExternalLink className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        <div className="w-full h-[800px] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10">
              <Loader2 className="h-10 w-10 animate-spin text-brand-navy mb-4" />
              <p className="text-gray-600">Loading secure form...</p>
            </div>
          )}
          <iframe
            key={key}
            src="/kyc-proxy/india_kyc/"
            title="KYC Verification"
            className="w-full h-full border-0 bg-white"
            allow="camera; microphone; geolocation"
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <div className="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-md text-sm text-amber-800">
          <p className="font-medium">Note:</p>
          <p>If the form does not appear above, it may be blocked by your browser's security settings. Please use the "Open in New Window" button to access the form directly.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KycPage;