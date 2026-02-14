import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_47q3349',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'oAlkPDNkSaadnzYDB',
  templates: {
    contact: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT || 'template_04ubgfy',
    quote: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_QUOTE || 'template_cexyhmi'
  }
};

emailjs.init(EMAILJS_CONFIG.publicKey);

export default emailjs;
