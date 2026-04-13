import { createClient } from '@supabase/supabase-js';

// Reemplazar estas con variables de entorno import.meta.env.VITE_SUPABASE_URL en producción
const SUPABASE_URL = 'https://jqwhpkoskdfeyntzfeiy.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impxd2hwa29za2RmZXludHpmZWl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MjUwNjksImV4cCI6MjA5MDUwMTA2OX0.arvrhUWM7O4opaVsoqfbmm8wxotSB2BQpQHnUdAHjqw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
