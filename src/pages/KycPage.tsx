import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const KycPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow pt-24 container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-amber-100">
          <div className="text-sm text-gray-600">
            <p className="font-medium text-gray-900">Having trouble viewing the form?</p>
            <p>Due to browser security settings, the form below may not load correctly.</p>
          </div>
          <Button 
            onClick={() => window.open('http://www.amassdubai.com/india_kyc/', '_blank')}
            className="bg-brand-navy hover:bg-brand-navy/90 text-white whitespace-nowrap"
          >
            Open Form in New Window <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="w-full h-[800px] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative">
          <iframe
            src="/kyc-proxy/"
            title="KYC Verification"
            className="w-full h-full border-0"
            allow="camera; microphone; geolocation"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KycPage;