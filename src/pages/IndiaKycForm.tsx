import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Loader2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IndiaKycForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Failsafe: If iframe hasn't loaded in 5 seconds, remove loader and show fallback
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowFallback(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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

            {showFallback && (
               <div className="absolute top-0 left-0 right-0 bg-yellow-50 p-4 border-b border-yellow-200 flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
                 <p className="text-yellow-800 text-sm text-center sm:text-left">
                   If the form below is not loading correctly, you can open it directly in a new tab.
                 </p>
                 <Button variant="outline" size="sm" asChild className="gap-2 whitespace-nowrap">
                   <a href="http://www.amassdubai.com/india_kyc/" target="_blank" rel="noopener noreferrer">
                     Open Form Directly <ExternalLink size={14} />
                   </a>
                 </Button>
               </div>
            )}

            <iframe 
              src="/india_kyc/" 
              className="w-full min-h-[1000px] border-0"
              title="India KYC Form"
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