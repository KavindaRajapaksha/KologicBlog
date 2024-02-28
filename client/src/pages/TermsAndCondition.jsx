import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[rgb(16,23,42)]">
      <div className="max-w-2xl mx-auto p-8 shadow-md rounded-lg dark:bg-gray-100">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-500">Terms and Conditions</h1>
        <div className="text-md text-gray-700">
          <p className="mb-4">
            Welcome to Kologic Technology! These terms and conditions govern your use of our website and services provided by Kologic Technology. By accessing or using our website and services, you agree to comply with these terms and conditions. Please read them carefully before proceeding.
          </p>
          <p className="mb-4">
            <strong>1. Acceptance of Terms</strong><br/>
            By using our website and services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you may not use our website or services.
          </p>
          <p className="mb-4">
            <strong>2. Intellectual Property</strong><br/>
            All content on our website, including text, graphics, logos, images, and software, is the property of Kologic Technology and is protected by copyright laws. You may not reproduce, distribute, modify, or transmit any part of our website without our prior written consent.
          </p>
          <p className="mb-4">
            <strong>3. User Conduct</strong><br/>
            You agree to use our website and services only for lawful purposes and in compliance with these terms and conditions. You may not engage in any activity that interferes with the operation of our website or services or violates the rights of others.
          </p>
          
        </div>
        <p className="mt-6 text-sm text-gray-500">
          If you have any questions or concerns about these terms and conditions, please contact us at <a href="mailto:rdks.kavinda@gmail.com" className="text-teal-500">rdks.kavinda@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
