-- Migration to add 'WhitePaper' as a valid category
-- You can run this in the Supabase SQL Editor

-- 1. If you have a check constraint on category, drop it (optional, depends on current schema)
-- ALTER TABLE posts DROP CONSTRAINT IF EXISTS posts_category_check;

-- 2. Add a check constraint to ensure only valid categories are used (Optional but recommended)
-- ALTER TABLE posts ADD CONSTRAINT posts_category_check CHECK (category IN ('Blog', 'WhitePaper'));

-- 3. If you just want to update existing 'blog' (case insensitive) to 'Blog' to match new standard
UPDATE posts SET category = 'Blog' WHERE LOWER(category) = 'blog';
