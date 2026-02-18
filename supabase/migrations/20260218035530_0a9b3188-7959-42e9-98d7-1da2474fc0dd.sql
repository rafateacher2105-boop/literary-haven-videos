
-- Table to store captured emails from book downloads
CREATE TABLE public.book_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  book_slug TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.book_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form, no auth required)
CREATE POLICY "Anyone can submit their email" 
ON public.book_leads 
FOR INSERT 
WITH CHECK (true);

-- No select/update/delete for anon users (admin only via service role)
