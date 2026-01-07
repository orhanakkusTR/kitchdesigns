import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  templates: {
    contact: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
    quote: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_QUOTE
  }
};

emailjs.init(EMAILJS_CONFIG.publicKey);

export default emailjs;
