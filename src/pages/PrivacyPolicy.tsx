import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface Section {
  title: string;
  content?: string;
  subsections?: Subsection[];
}

interface Subsection {
  title: string;
  content: string;
}

const PrivacyPolicyPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate page loading effect
    setIsLoaded(true);
  }, []);

  const sections: Section[] = [
    {
      title: "Introduction",
      content: "Welcome to GGL (Singapore) Ltd [\"GGL (Singapore)\", \"we\", \"our\", \"us\"]. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services."
    },
    {
      title: "Our Commitment to Privacy",
      subsections: [
        {
          title: "Limited Data Collection",
          content: "At GGL (Singapore), we adhere to strict privacy principles by collecting only the essential information necessary for efficient communication. This streamlined approach simplifies user interactions and minimizes the exposure of personal details."
        },
        {
          title: "Voluntary Disclosure",
          content: "Users at GGL (Singapore) have full control over the information they choose to share. Our policy emphasizes voluntary data submission, empowering users to determine the extent of their engagement."
        },
        {
          title: "Purposeful Communication",
          content: "The information we collect serves a specific and essential purpose—facilitating effective communication. Whether responding to inquiries, providing relevant updates, or maintaining ongoing connections, user data is used exclusively for communication-related activities."
        },
        {
          title: "User Empowerment",
          content: "At GGL (Singapore), we prioritize user control over their personal information. Beyond allowing users to choose what information to share, we empower them to manage their privacy settings and preferences."
        }
      ]
    },
    {
      title: "What Constitutes Personal Information?",
      subsections: [
        {
          title: "Personal Information",
          content: "At GGL (Singapore), \"Personal Information\" refers to any data related to an identified or identifiable natural person. This includes details that can directly or indirectly identify an individual, such as their name, address, contact information, identification numbers, location data, online identifiers, and specific characteristics related to their physical, physiological, genetic, mental, economic, cultural, or social identity."
        },
        {
          title: "Other Information",
          content: "\"Other Information\" encompasses data that does not fall within the scope of Personal Information. This includes anonymized or aggregated data that cannot be used to identify an individual and publicly available information that has not been combined with Personal Information."
        }
      ]
    },
    {
      title: "What Data Do We Gather and When?",
      content: "At GGL (Singapore), we prioritize minimal data collection to optimize user interactions and facilitate effective communication. The information we collect includes:",
      subsections: [
        {
          title: "Name",
          content: "Users can voluntarily provide their names when they contact us through our website's contact form or other communication channels. This helps us personalize interactions and enhance the quality of communication."
        },
        {
          title: "Email Address",
          content: "Users provide their email addresses when they contact us or subscribe to our services. We use email addresses to establish efficient communication and respond to inquiries promptly."
        },
        {
          title: "Phone Number",
          content: "Users have the option to provide their phone numbers to enable direct communication or to receive service-related updates via SMS or voice calls."
        },
        {
          title: "Location",
          content: "Users may provide location information when interacting with our services. This information helps us offer location-specific services and tailor our offerings."
        }
      ]
    },
    {
      title: "How We Utilize the Collected Information",
      content: "At GGL (Singapore), we are committed to ensuring that the information we collect is used responsibly and transparently. The collected information is utilized for personalizing user experience, enhancing communication, improving our services, facilitating transactions, ensuring security, marketing and promotions, compliance with legal obligations, and aggregated data analysis."
    },
    {
      title: "How We Share Information with Third Parties",
      content: "At GGL (Singapore), we are committed to maintaining the privacy and security of our users' information. We only share information with third parties under specific circumstances including service providers, business partners, legal compliance, corporate transactions, with consent, aggregated data, social media platforms, third-party advertising, and research and development."
    },
    {
      title: "What Steps Do We Take to Protect Your Information?",
      content: "At GGL (Singapore), the security and confidentiality of your information are our highest priorities. We implement comprehensive measures including data encryption, secure access controls, regular security audits, firewall and intrusion detection systems, data anonymization, regular software updates, employee training, physical security measures, incident response plans, vendor security, user controls, and continuous monitoring."
    },
    {
      title: "What Choices Do You Have Regarding the Use of Your Information?",
      content: "You have various choices regarding your information including managing communication preferences, accessing and updating your information, data portability, deleting your information, cookie preferences, interest-based advertising, third-party data sharing restrictions, processing restrictions, withdrawal of consent, and exercising your rights by contacting us."
    }
  ];

  return (
    <div className={`min-h-screen bg-gray-50 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              We are committed to protecting your privacy and ensuring transparent data practices.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            {sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  {section.title}
                </h2>
                
                {section.content && (
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {section.content}
                  </p>
                )}
                
                {section.subsections && (
                  <div className="space-y-6">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-medium text-gray-900 mb-4">
                          {subsection.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Questions About This Privacy Policy?
            </h3>
            <p className="text-blue-800 mb-4">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500 text-center">
            Last updated: June 20, 2025
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
