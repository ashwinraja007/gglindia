import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const KycPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow pt-20">
        <iframe
          src="/kyc-proxy/"
          title="KYC Verification"
          className="w-full h-[800px] border-0"
          allow="camera; microphone; geolocation"
        />
      </main>
      <Footer />
    </div>
  );
};

export default KycPage;