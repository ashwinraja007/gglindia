import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const KycPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow pt-24 container mx-auto px-4 py-8">
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