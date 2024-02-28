import { BsShieldLock } from 'react-icons/bs';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[rgb(16,23,42)]">
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg dark:bg-gray-100">
        <div className="flex items-center justify-center mb-6">
          <BsShieldLock className="text-4xl text-gray-500 mr-3" />
          <h1 className="text-3xl font-semibold text-gray-700">Privacy Policy</h1>
        </div>
        <div className="text-md text-gray-700">
          <p className="mb-4">
            We're sorry, but our privacy policy is currently not available. We are working hard to
            update it and make it accessible to you as soon as possible. Your privacy is important to us,
            and we are committed to ensuring that your personal information is protected.
          </p>
          <p className="mb-4">
            In the meantime, if you have any questions or concerns about your privacy or the use of
            your personal information, please feel free to contact us at{' '}
            <a href="mailto:info@yourcompany.com" className="text-teal-500">rdks.kavinda@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
