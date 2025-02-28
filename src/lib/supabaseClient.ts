import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://yvtkfwkbodijdoategng.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2dGtmd2tib2RpamRvYXRlZ25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NjMyMDYsImV4cCI6MjA1NjMzOTIwNn0.XVZIa_eyJKujtot07o3XQFEdJ7-FaDnFp7Ulm4dGx30',
)
