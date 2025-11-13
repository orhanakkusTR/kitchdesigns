import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const quoteData: QuoteRequest = await req.json();
    const resendApiKey = Deno.env.get('RESEND_API_KEY');

    if (!resendApiKey) {
      console.log('RESEND_API_KEY not configured. Quote saved to database but email not sent.');
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Quote request submitted successfully' 
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0d9488;">New Quote Request from Kitch Designs Website</h2>
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${quoteData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${quoteData.email}">${quoteData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${quoteData.phone}">${quoteData.phone}</a></p>
          <p><strong>Address:</strong> ${quoteData.address}</p>
          <p><strong>Service:</strong> ${quoteData.service}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${quoteData.message || 'No additional details provided'}</p>
        </div>
        <p style="color: #6b7280; font-size: 12px;">
          Submitted: ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
        </p>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Kitch Designs <onboarding@resend.dev>',
        to: ['info@kitchdesigns.com'],
        subject: `New Quote Request: ${quoteData.service} - ${quoteData.name}`,
        html: emailHtml,
        reply_to: quoteData.email,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Resend API error:', error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const data = await res.json();
    console.log('Email sent successfully:', data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Quote request submitted successfully and email sent' 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing quote request:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to process quote request' 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});