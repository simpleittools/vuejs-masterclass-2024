/* eslink-env node */
import { faker } from "@faker-js/faker";

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SERVICE_ROlE_KEY,
)

console.log(supabase)
