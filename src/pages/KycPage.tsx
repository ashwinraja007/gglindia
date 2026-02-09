import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import SecureFrame from '@/components/SecureFrame';

const KycPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">KYC Details</h1>
        
        <div className="h-[800px] w-full">
          <SecureFrame 
            targetUrl="http://www.amassdubai.com/india_kyc/" 
            title="KYC Verification"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KycPage;