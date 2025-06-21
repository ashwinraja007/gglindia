import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const TermsOfUsePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="px-6 py-10 max-w-5xl mx-auto text-justify text-sm sm:text-base leading-relaxed text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms of Use Agreement for the Website</h1>

        <p>
          Welcome to the <strong>GGL (India) Pvt Ltd.</strong> website (hereinafter referred to as the <strong>“Website”</strong>).
          Please review these terms of use carefully before engaging with the Website. Your access and utilization of the
          Website are governed by these terms of use (hereinafter referred to as the <strong>“Terms of Use”</strong>). By accessing or using
          the Website, you agree to be legally bound by these Terms of Use, representing both yourself and the entity you
          are authorized to act on behalf of (hereinafter referred to as <strong>“you”</strong> or <strong>“your”</strong>). If you do not accept all the Terms
          of Use, refrain from accessing or utilizing the Website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">User Eligibility</h2>
        <p>
          GGL (India) provides the Website exclusively to entities and individuals who have reached the legal age of majority
          and have the legal capacity to enter into binding agreements under the applicable law in India.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Scope of Terms of Use</h2>
        <p>
          These Terms govern your use of the Website and related applications, software, and services (collectively, “Services”),
          unless a separate agreement applies.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Modifications</h2>
        <p>
          GGL (India) may modify these Terms at any time. Continued use of the Website after changes indicates your acceptance.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Privacy Notice</h2>
        <p>
          By submitting personal data to GGL (India), you confirm that you have obtained necessary consent for processing under applicable law.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">License and Ownership</h2>
        <p>
          All content and intellectual property on the Website belong to GGL (India) or its licensors. You receive a limited, non-transferable
          license to access and use the Website, but may not reproduce or redistribute it without written consent.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Restrictions on Website Use</h2>
        <ul className="list-disc ml-6">
          <li>No false, misleading, or harmful content.</li>
          <li>Do not introduce malware or interfere with the Website’s operation.</li>
          <li>No framing or unauthorized use of GGL’s content or trademarks.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Outbound & Inbound Links</h2>
        <p>
          GGL is not responsible for third-party websites linked from this Website. Linking to this Website without permission is prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Termination</h2>
        <p>
          GGL may suspend or terminate your access at any time without notice. You must cease use and destroy any content if access is terminated.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Disclaimer of Warranties</h2>
        <p>
          The Website is provided “as is” without warranties. GGL disclaims all warranties including merchantability, fitness, and non-infringement.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
        <p>
          GGL is not liable for any indirect, incidental, or consequential damages from use or inability to use the Website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Compliance with Laws</h2>
        <p>
          You agree to comply with all applicable laws. Export of services or data may be subject to restrictions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Governing Law</h2>
        <p>
          These Terms are governed by Indian law. Any disputes will be handled by courts located in India.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">General</h2>
        <p>
          These Terms cannot be transferred. If a term is deemed invalid, the rest remain in effect. You may print these Terms for record keeping.
        </p>

        <p className="mt-6">
          We strive to respond to all inquiries promptly and provide you with the assistance you need. Thank you for choosing <strong>GGL (India) Pvt Ltd</strong>.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfUsePage;
