import React from 'react';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="bg-white">
      <div className="flex flex-col items-center">
        <Header />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-24 mt-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: Wednesday January 28, 2026</p>
        
        <div className="prose prose-gray max-w-none space-y-8 text-foreground">
          <p className="text-lg leading-relaxed">
            Hallway Technologies Ltd ("Hallway", "we", "us", or "our") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
            you use our website, mobile applications, volunteer portal, and related services (collectively, the "Platform").
          </p>
          
          <p className="text-lg leading-relaxed">
            By accessing or using Hallway, you agree to the practices described in this Privacy Policy.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mt-6 mb-3">a. Personal Information</h3>
            <p className="mb-3">We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>School or institution details</li>
              <li>Profile information</li>
              <li>Government-issued or student identification (where required for verification)</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">b. Usage and Technical Information</h3>
            <p className="mb-3">We automatically collect certain information when you interact with our Platform, such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Device type and operating system</li>
              <li>Browser type</li>
              <li>Pages visited and actions taken</li>
              <li>Date and time of access</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">c. Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage, and 
              improve our services. You may control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain the Platform</li>
              <li>Create and manage user, vendor and volunteer accounts</li>
              <li>Verify identities and prevent fraud</li>
              <li>Communicate updates, opportunities, and announcements</li>
              <li>Improve functionality, security, and user experience</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Share Your Information</h2>
            <p className="font-medium mb-3">We do not sell your personal information.</p>
            <p className="mb-3">We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With trusted service providers who help us operate the Platform</li>
              <li>With partners where necessary to deliver services (e.g., payments, verification, delivery)</li>
              <li>To comply with legal obligations or lawful requests</li>
              <li>To protect the rights, safety, and integrity of Hallway and its users</li>
            </ul>
            <p className="mt-4">
              All third parties are required to handle your data securely and only for authorized purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no system is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes outlined 
              in this Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights and Choices</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent where applicable</li>
              <li>Object to certain data processing activities</li>
            </ul>
            <p className="mt-4">Requests can be made by contacting us using the details below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
            <p>
              Hallway is intended for users who are at least 14 years old or the age of majority in their 
              jurisdiction. We do not knowingly collect personal information from minors without appropriate consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. International Data Transfers</h2>
            <p>
              Your information may be processed or stored in countries other than your own. Where this 
              occurs, we ensure appropriate safeguards are in place to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page 
              with an updated revision date. Continued use of the Platform constitutes acceptance of the updated Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p className="mb-3">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mb-1">
              <span className="font-medium">Email:</span>{' '}
              <a href="mailto:privacy@hallway.africa" className="text-primary hover:underline">
                privacy@hallway.africa
              </a>
            </p>
            <p className="mb-6">
              <span className="font-medium">Company:</span> Hallway Technologies Ltd
            </p>
            <p className="text-lg font-medium italic">
              Hallway is built with privacy, trust, and student safety at its core.
            </p>
            <p className="text-xl font-semibold text-primary mt-2">Value Changes Everything!</p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
