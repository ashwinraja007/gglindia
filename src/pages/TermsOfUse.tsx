import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const TermsOfUse = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms of Use Agreement</h1>

      <p className="mb-4">
        Welcome to the GGL (Singapore) Pte Ltd. website (hereinafter referred to as the
        "Website"). Please review these Terms of Use carefully before engaging with the
        Website. Your access and utilization of the Website are governed by these Terms of
        Use. By accessing or using the Website, you agree to be legally bound by these
        Terms of Use. If you do not accept all the Terms of Use, refrain from accessing or
        utilizing the Website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. User Eligibility</h2>
      <p className="mb-4">
        The Website is provided exclusively to individuals and entities that have reached
        the legal age of majority and are legally capable of entering binding agreements
        under applicable Singapore law. Unauthorized users are not permitted to use the
        Website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Scope of Terms</h2>
      <p className="mb-4">
        These Terms of Use apply to your use of the Website and any related services,
        applications, or content, unless a separate service agreement applies. Specific
        service-related agreements may override these Terms where applicable.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Modifications</h2>
      <p className="mb-4">
        GGL (Singapore) reserves the right to update these Terms at any time. Continued
        use of the Website following changes constitutes your acceptance of the modified
        terms. GGL (Singapore) may also update or discontinue Website content and features
        without prior notice.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Privacy Notice</h2>
      <p className="mb-4">
        By submitting personal information through the Website, you affirm that all
        necessary consents required under applicable laws have been obtained.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. License and Ownership</h2>
      <p className="mb-4">
        All content, trademarks, and intellectual property on the Website are the exclusive
        property of GGL (Singapore), its affiliates, or licensors. Unauthorized use,
        reproduction, or distribution is strictly prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Acceptable Use Restrictions</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Do not transmit misleading or harmful information.</li>
        <li>
          Do not upload malicious software, including viruses or harmful code.
        </li>
        <li>
          Do not use or access the Website in a manner that disrupts normal operation.
        </li>
        <li>
          Framing or copying any Website content without permission is prohibited.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Links to Third-Party Sites</h2>
      <p className="mb-4">
        External links provided are for user convenience only. GGL (Singapore) assumes no
        responsibility for the content or reliability of external sites.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Inbound Linking</h2>
      <p className="mb-4">
        Linking to any page of the Website other than the homepage without express written
        consent is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Termination</h2>
      <p className="mb-4">
        GGL (Singapore) may terminate or suspend access to the Website at any time without
        notice. Upon termination, users must cease all use and destroy all copied content.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">10. Disclaimer of Warranties</h2>
      <p className="mb-4">
        The Website is provided "as is" without warranties of any kind. GGL (Singapore)
        disclaims all express and implied warranties, including fitness for a particular
        purpose and non-infringement.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">11. Limitation of Liability</h2>
      <p className="mb-4">
        To the fullest extent permitted by law, GGL (Singapore) shall not be liable for any
        indirect, incidental, or consequential damages resulting from Website use.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">12. Legal Compliance and Export</h2>
      <p className="mb-4">
        You agree to comply with all applicable laws and export restrictions. You shall not
        access or use the Website in any jurisdiction where such use is unlawful.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">13. Governing Law</h2>
      <p className="mb-4">
        These Terms of Use shall be governed by the laws of Singapore. Any disputes shall
        be resolved in Singapore courts.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">14. General Provisions</h2>
      <p className="mb-4">
        If any part of these Terms is held invalid, the remaining provisions shall continue
        in full force. You may print a copy of these Terms for your records.
      </p>

      <p className="mt-6">Thank you for choosing GGL (Singapore).</p>
    </div>
  );
};

export default TermsOfUse;
