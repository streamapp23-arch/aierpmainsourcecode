-- Add new columns to the 'posts' table
ALTER TABLE posts 
ADD COLUMN IF NOT EXISTS tags text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS meta_title text,
ADD COLUMN IF NOT EXISTS meta_description text,
ADD COLUMN IF NOT EXISTS image_title text,
ADD COLUMN IF NOT EXISTS image_description text,
ADD COLUMN IF NOT EXISTS image_alt text,
ADD COLUMN IF NOT EXISTS status text DEFAULT 'published',
ADD COLUMN IF NOT EXISTS publish_date timestamp with time zone DEFAULT now();

-- Create an index on tags for faster filtering (optional but recommended)
CREATE INDEX IF NOT EXISTS idx_posts_tags ON posts USING GIN (tags);

-- Create an index on publish_date for sorting
CREATE INDEX IF NOT EXISTS idx_posts_publish_date ON posts (publish_date DESC);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_posts_status ON posts (status);
