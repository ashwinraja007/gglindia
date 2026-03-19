import React from "react";
import { Navigate } from "react-router-dom";

const KycIframe = () => {
  // Safely redirect to the e-KYC route in the same tab, 
  // removing the popup / new window behavior.
  return <Navigate to="/e-kyc" replace />;
};

export default KycIframe;
