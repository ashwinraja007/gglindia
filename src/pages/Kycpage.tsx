import { useEffect } from "react";

const KycIframe = () => {
  useEffect(() => {
    window.open(
      "http://www.amassdubai.com/gglindia-kyc-details/",
      "_blank"
    );
  }, []);

  return null;
};

export default KycIframe;
