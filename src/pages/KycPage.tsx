import { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, Loader2, ExternalLink } from "lucide-react";

const KycPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Use the proxy path. 
  // In production, this points to your Node.js proxy (e.g., via Nginx routing /kyc-proxy to localhost:3001)
  // In development, Vite proxies this to the target.
  const iframeSrc = "/kyc-proxy/index.php";

  return (
    <div className="flex flex-col w-full h-[calc(100vh-80px)] relative bg-gray-50">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      )}
      
      {error && (
        <div className="p-4 absolute top-0 w-full z-20">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Connection Error</AlertTitle>
            <AlertDescription>
              Unable to load the KYC form. Please ensure you are connected to the internet or try again later.
              <div className="mt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.open("http://www.amassdubai.com/india_kyc/", "_blank")}
                >
                  Open Form in New Window <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}
      <iframe
        src={iframeSrc}
        title="KYC Details"
        className="flex-grow w-full border-none"
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        allow="camera; microphone; geolocation"
      />
    </div>
  );
};

export default KycPage;
