import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://wfyveowwgiwwjvqlgpkw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmeXZlb3d3Z2l3d2p2cWxncGt3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTkxMjU1NSwiZXhwIjoyMDI1NDg4NTU1fQ.ub0bWUQes6VDuRqHhGBKhdbMOoyIwF-xzEJNrimtd_k"
);
