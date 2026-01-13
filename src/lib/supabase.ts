import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://adbfkluztloyyjsbrrlf.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkYmZrbHV6dGxveXlqc2JycmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NzgxMDAsImV4cCI6MjA3ODU1NDEwMH0.YG4qRbjb_m0QKo-EFHEo6eIUzfFvN0sPCcAN0mh8SEM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
