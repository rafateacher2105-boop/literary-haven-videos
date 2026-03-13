ALTER TABLE public.book_leads ADD CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
ALTER TABLE public.book_leads ADD CONSTRAINT email_length CHECK (length(email) <= 255);
ALTER TABLE public.book_leads ADD CONSTRAINT name_length CHECK (name IS NULL OR length(name) <= 100);
ALTER TABLE public.book_leads ADD CONSTRAINT book_slug_length CHECK (length(book_slug) <= 255);