import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://yghyztfvqsjtautrfodp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnaHl6dGZ2cXNqdGF1dHJmb2RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyMzE0NzQsImV4cCI6MjAyMjgwNzQ3NH0.76KpTkp6cOWJ4e83hDt14ITfkAJiFiJ8W18VQPrAae0'
)
