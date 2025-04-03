
-- Create the villa_images storage bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public, avif_autodetection, file_size_limit, allowed_mime_types)
SELECT 'villa_images', 'Villa Images', TRUE, FALSE, 52428800, ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp']::text[]
WHERE NOT EXISTS (
    SELECT 1 FROM storage.buckets WHERE id = 'villa_images'
);

-- Create storage policy to allow anonymous uploads
INSERT INTO storage.policies (name, definition, bucket_id)
SELECT 'Public Upload', '(bucket_id = ''villa_images''::text)', 'villa_images'
WHERE NOT EXISTS (
    SELECT 1 FROM storage.policies WHERE name = 'Public Upload' AND bucket_id = 'villa_images'
);
