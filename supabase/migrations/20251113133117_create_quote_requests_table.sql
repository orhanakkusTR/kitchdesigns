/*
  # Quote Requests Table

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key)
      - `name` (text) - Customer full name
      - `email` (text) - Customer email
      - `phone` (text) - Customer phone number
      - `address` (text) - Project address
      - `service` (text) - Service type requested
      - `message` (text) - Project details
      - `status` (text) - Request status (new, contacted, completed)
      - `created_at` (timestamptz) - When request was submitted
      - `updated_at` (timestamptz) - Last update time

  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy for inserting quote requests (public access)
    - Add policy for reading own requests (authenticated users only)
    - Add policy for admin access (service role)
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  service text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quote requests"
  ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can read own quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (auth.jwt()->>'email' = email);

CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);
