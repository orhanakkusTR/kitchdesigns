import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://elxmzwbhykrgmydydhpw.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVseG16d2JoeWtyZ215ZHlkaHB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzMDA4OTEsImV4cCI6MjA4Mzg3Njg5MX0.QRnxrmuIF8N13EOTaxkU-sSdvec1VuDjM6ZQH8JJE8U';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
