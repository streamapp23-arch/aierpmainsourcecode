# Fix for "publish_date column not found" Error

## Problem
The error `Could not find the 'publish_date' column of 'posts' in the schema cache` occurs because the database schema is missing the `publish_date` and `status` columns that the application code expects.

## Solution

### Step 1: Run the SQL Migration in Supabase

1. **Open your Supabase Dashboard**
   - Go to https://supabase.com/dashboard
   - Select your project

2. **Navigate to SQL Editor**
   - Click on "SQL Editor" in the left sidebar
   - Click "New query"

3. **Copy and paste the following SQL**:

```sql
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
```

4. **Run the query**
   - Click the "Run" button or press `Ctrl+Enter` (Windows) / `Cmd+Enter` (Mac)
   - You should see a success message

### Step 2: Update Existing Posts (Optional but Recommended)

If you have existing posts without publish_date values, run this additional query:

```sql
-- Update existing posts to set publish_date from created_at if null
UPDATE posts 
SET publish_date = created_at 
WHERE publish_date IS NULL AND created_at IS NOT NULL;

-- For posts without created_at, set to current time
UPDATE posts 
SET publish_date = now() 
WHERE publish_date IS NULL;
```

### Step 3: Verify the Fix

1. **Check the table structure**:
   - In Supabase Dashboard, go to "Table Editor"
   - Select the "posts" table
   - Verify that the following columns now exist:
     - `tags` (text[])
     - `meta_title` (text)
     - `meta_description` (text)
     - `image_title` (text)
     - `image_description` (text)
     - `image_alt` (text)
     - `status` (text)
     - `publish_date` (timestamp with time zone)

2. **Test the application**:
   - Try creating a new blog post
   - Try editing an existing blog post
   - The error should no longer appear

## What These Columns Do

- **`publish_date`**: Stores when the post should be published (supports scheduling)
- **`status`**: Tracks the post state (`draft`, `published`, or `scheduled`)
- **`tags`**: Array of tags for categorizing posts
- **`meta_title`**: SEO meta title
- **`meta_description`**: SEO meta description
- **`image_title`**: Title attribute for the featured image
- **`image_alt`**: Alt text for the featured image (accessibility & SEO)
- **`image_description`**: Description of the featured image

## Troubleshooting

If you still see the error after running the migration:

1. **Clear browser cache**: Hard refresh the page (`Ctrl+Shift+R` or `Cmd+Shift+R`)
2. **Restart dev server**: Stop and restart `npm run dev`
3. **Check Supabase connection**: Verify your `.env` file has the correct Supabase credentials
4. **Verify migration ran**: Check the Table Editor in Supabase to confirm columns exist
