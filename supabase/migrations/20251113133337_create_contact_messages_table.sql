/*
  # Contact Messages Table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text) - Customer full name
      - `email` (text) - Customer email
      - `phone` (text) - Customer phone number
      - `service` (text) - Service interest
      - `message` (text) - Message content
      - `status` (text) - Message status (new, read, replied)
      - `created_at` (timestamptz) - When message was sent
      - `updated_at` (timestamptz) - Last update time

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for inserting messages (public access)
    - Add policy for reading own messages (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text DEFAULT '',
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can read own contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (auth.jwt()->>'email' = email);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
