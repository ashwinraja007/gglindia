import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const KycIframe = () => {
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen">
      {error && (
        <div className="p-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Unable to load the KYC form. Please refresh the page or contact support.
            </AlertDescription>
          </Alert>
        </div>
      )}
      <iframe
        src="https://tipscbse.com/kyc-details/india_kyc/"
        title="KYC Details"
        className="flex-grow w-full border-none"
        onError={() => setError(true)}
      />
    </div>
  );
};

export default KycIframe;
