/*
  # Create feedback table with rate limiting

  1. New Tables
    - `feedback`
      - `id` (uuid, primary key)
      - `name` (text)
      - `message` (text)
      - `rating` (integer, 1-5)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `feedback` table
    - Add policy for public read access
    - Add policy for public insert access with rate limiting
*/

CREATE TABLE IF NOT EXISTS feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  message text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read feedback
CREATE POLICY "Anyone can read feedback"
  ON feedback
  FOR SELECT
  TO public
  USING (true);

-- Allow anyone to insert feedback with a rate limit of one per 5 minutes
CREATE POLICY "Anyone can insert feedback with rate limit"
  ON feedback
  FOR INSERT
  TO public
  WITH CHECK (
    NOT EXISTS (
      SELECT 1 FROM feedback
      WHERE created_at > now() - interval '5 minutes'
      AND auth.uid() = auth.uid()
    )
  );