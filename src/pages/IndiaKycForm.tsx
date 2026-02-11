import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const IndiaKycForm = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-28 pb-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="/kyc-proxy/" 
              className="w-full min-h-[1000px] border-0"
              title="India KYC Form"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndiaKycForm;