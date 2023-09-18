import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://pmduoojgfcjyzsbkjlrd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtZHVvb2pnZmNqeXpzYmtqbHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5NDE0MDYsImV4cCI6MjAxMDUxNzQwNn0.r6AFtbGbAHvp0bUCBY13dsZrx2hDXAFkw4optRJ7hAg')


export default supabase;