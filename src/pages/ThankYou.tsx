import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function ThankYou() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <SEO
        title="Thank You - Kitch Designs"
        description="Thank you for contacting Kitch Designs. We'll get back to you soon!"
        canonicalUrl="https://kitchdesigns.com/thank-you"
      />
      <div className="container mx-auto px-6 py-24 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8 animate-bounce">
              <CheckCircle className="text-green-600" size={48} />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Your message has been sent successfully.
            </p>

            <p className="text-lg text-gray-500 mb-8">
              We'll get back to you within 24 hours to discuss your project.
            </p>

            <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-6 mb-8">
              <p className="text-lg font-semibold mb-2">Need immediate assistance?</p>
              <a
                href="tel:8563983087"
                className="text-2xl font-bold hover:underline"
              >
                (856) 398-3087
              </a>
            </div>

            <div className="text-gray-500">
              <p className="text-sm">
                Redirecting to homepage in <span className="font-bold text-primary text-xl">{countdown}</span> seconds...
              </p>
              <button
                onClick={() => navigate('/')}
                className="mt-4 text-primary hover:text-primary-dark underline font-semibold"
              >
                Return to homepage now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
