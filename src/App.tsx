// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Transportation from "./pages/services/Transportation";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import LiquidTransportation from "./pages/services/LiquidTransportation";
import AirFreight from "./pages/services/AirFreight";
import OceanFreight from "./pages/services/OceanFreight";
import LCLConsolidation from "./pages/services/LCLConsolidation";
import Warehousing from "./pages/services/Warehousing";
import ProjectCargo from "./pages/services/ProjectCargo";
import CustomsClearance from "./pages/services/CustomsClearance";
import GlobalPresence from "./pages/GlobalPresence";
import BangladeshHome from "./pages/BangladeshHome";
import BangladeshAbout from "./pages/BangladeshAbout";
import BangladeshServices from "./pages/BangladeshServices";
import BangladeshGlobalPresence from "./pages/BangladeshGlobalPresence";
import BangladeshContact from "./pages/BangladeshContact";
import { ScrollToTop } from "./components/common/ScrollToTop";
import IndiaKycForm from "./pages/IndiaKycForm";
import kycpage from "./pages/Kycpage";

const queryClient = new QueryClient();

// Wrapper component to handle 404 but ignore /india_kyc paths
function NotFoundWrapper() {
  const location = useLocation();
  
  // If the path is /india_kyc or starts with /india_kyc/, 
  // don't show 404 - let the server handle it
  if (location.pathname === '/india_kyc' || location.pathname.startsWith('/india_kyc/')) {
    return null;
  }
  
  return <NotFound />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* India / main site */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/global-presence" element={<GlobalPresence />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsOfUse />} />
            
            {/* India – service details */}
            <Route path="/services/transportation" element={<Transportation />} />
            <Route
              path="/services/liquid-transportation"
              element={<LiquidTransportation />}
            />
            <Route path="/services/air-freight" element={<AirFreight />} />
            <Route path="/services/ocean-freight" element={<OceanFreight />} />
            <Route
              path="/services/lcl-consolidation"
              element={<LCLConsolidation />}
            />
            <Route path="/services/project-cargo" element={<ProjectCargo />} />
            <Route
              path="/services/customs-clearance"
              element={<CustomsClearance />}
            />
            <Route path="/services/warehousing" element={<Warehousing />} />
            
            {/* KYC */}
            
            <Route path="/india-kyc" element={<IndiaKycForm />} />
             <Route path="/kyc-details" element={<kycpage/>} />
            
            {/* Bangladesh mini-site */}
            {/* Add your Bangladesh routes here if needed */}
            
            {/* 404 — wrapped to ignore /india_kyc paths */}
            <Route path="*" element={<NotFoundWrapper />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
