import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://alglatntczhuykccxdca.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZ2xhdG50Y3podXlrY2N4ZGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMDg4ODMsImV4cCI6MjA1OTg4NDg4M30.kNdI7hzSu8za5v92KanqJXXcZjzFYPl9W6UYKMI6nkg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
