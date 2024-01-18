import { createClient } from '@supabase/supabase-js'

const supabaseUrl='https://wyyoipavdekpuclixquw.supabase.co'

const supabeseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eW9pcGF2ZGVrcHVjbGl4cXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzODM1NTgsImV4cCI6MjAxOTk1OTU1OH0.-qfRh6hZDFwbLvOmL5qWCVIlr7d03LfJunUroCQiMpM'

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabeseKey)