import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL || 'https://adbfkluztloyyjsbrrlf.supabase.co'),
      'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkYmZrbHV6dGxveXlqc2JycmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NzgxMDAsImV4cCI6MjA3ODU1NDEwMH0.YG4qRbjb_m0QKo-EFHEo6eIUzfFvN0sPCcAN0mh8SEM'),
      'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(env.VITE_EMAILJS_SERVICE_ID || 'service_47q3349'),
      'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY || 'oAlkPDNkSaadnzYDB'),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID_QUOTE': JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID_QUOTE || 'template_cexyhmi'),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT': JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID_CONTACT || 'template_04ubgfy'),
    },
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
      minify: 'esbuild',
    },
  };
});
