import { X, Phone, Mail, User, Home } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error: dbError } = await supabase
        .from('quote_requests')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          service: formData.service,
          message: formData.message || 'No additional details provided'
        }]);

      if (dbError) throw dbError;

      const functionUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-quote-email`;

      await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(formData)
      });

      setSubmitStatus('success');

      setTimeout(() => {
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          service: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error sending quote request:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-t-2xl flex justify-between items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">Get a Free Quote</h2>
            <p className="text-teal-100 text-sm md:text-base">Tell us about your project and we'll get back to you within 24 hours</p>
          </div>
          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-2 transition-all duration-300 hover:scale-110 flex-shrink-0 ml-4"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                <User className="inline mr-2 text-primary" size={18} />
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                <Mail className="inline mr-2 text-primary" size={18} />
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                <Phone className="inline mr-2 text-primary" size={18} />
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                placeholder="(856) 398-3087"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                <Home className="inline mr-2 text-primary" size={18} />
                Project Address *
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                placeholder="123 Main St, Cherry Hill, NJ"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Service Needed *
            </label>
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
            >
              <option value="">Select a service...</option>
              <option value="Kitchen Remodeling">Kitchen Remodeling</option>
              <option value="Bathroom Remodeling">Bathroom Remodeling</option>
              <option value="Custom Cabinets">Custom Cabinets</option>
              <option value="Countertops">Countertops</option>
              <option value="Flooring">Flooring</option>
              <option value="Full Home Renovation">Full Home Renovation</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Project Details
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none text-sm md:text-base"
              placeholder="Tell us more about your project, timeline, and any specific requirements..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg text-sm md:text-base">
              Thank you! We'll contact you within 24 hours.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg text-sm md:text-base">
              Something went wrong. Please try again or call us directly.
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="sm:flex-none bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 text-sm md:text-base"
            >
              Cancel
            </button>
          </div>

          <p className="text-xs md:text-sm text-gray-500 text-center">
            Or call us directly at <a href="tel:8563983087" className="text-primary font-semibold hover:underline">856-398-3087</a>
          </p>
        </form>
      </div>
    </div>
  );
}
