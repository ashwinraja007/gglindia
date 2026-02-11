import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Loader2 } from 'lucide-react';

const IndiaKycForm = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-28 pb-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden relative min-h-[800px]">
            
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="h-10 w-10 animate-spin text-brand-gold" />
                  <p className="text-gray-500 font-medium">Loading KYC Form...</p>
                </div>
              </div>
            )}

            <iframe 
              src="/india_kyc/index.php" 
              className="w-full min-h-[1000px] border-0"
              title="India KYC Form"
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndiaKycForm;