import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Terms of Service - Kitch Designs"
        description="Terms of Service for Kitch Design Studio. Read our terms and conditions for using our services."
        canonicalUrl="https://kitchdesigns.com/terms-of-service"
      />

      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg md:text-xl opacity-90">Last Updated: November 12, 2025</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-8">

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Kitch Design Studio ("Company," "we," "us," or "our") concerning your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Services Provided</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Kitch Design Studio provides kitchen and bathroom remodeling services, including but not limited to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                <li>Kitchen design and remodeling</li>
                <li>Bathroom design and renovation</li>
                <li>Custom cabinet installation</li>
                <li>Countertop installation</li>
                <li>Flooring installation</li>
                <li>Design consultation services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Quotes and Estimates</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  All quotes and estimates provided by us are preliminary and subject to change based on site inspection, material availability, and project scope modifications. A detailed written contract will be provided before work begins.
                </p>
                <p>
                  Quotes are valid for 30 days from the date of issuance unless otherwise specified. Material costs and labor rates may change after this period.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Project Contracts</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  All remodeling projects require a written contract signed by both parties. The contract will include:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Detailed scope of work</li>
                  <li>Project timeline and milestones</li>
                  <li>Payment schedule</li>
                  <li>Material specifications</li>
                  <li>Warranty information</li>
                  <li>Change order procedures</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  Payment terms will be specified in your project contract. Typical payment structure includes:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Initial deposit upon contract signing (typically 30-50%)</li>
                  <li>Progress payments at specified milestones</li>
                  <li>Final payment upon project completion and approval</li>
                </ul>
                <p className="mt-3">
                  We accept payment via check, credit card, or bank transfer. Late payments may be subject to interest charges as specified in your contract.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Project Timeline</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  We strive to complete all projects within the agreed timeline. However, timelines may be affected by:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Material delivery delays</li>
                  <li>Weather conditions</li>
                  <li>Unforeseen structural issues</li>
                  <li>Change orders requested by the client</li>
                  <li>Permit approval delays</li>
                </ul>
                <p className="mt-3">
                  We will communicate any timeline changes promptly and work diligently to minimize delays.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Change Orders</h2>
              <p className="text-gray-700 leading-relaxed">
                Any changes to the original scope of work must be documented in writing through a change order. Change orders may affect the project timeline and total cost. All change orders must be approved and signed by the client before implementation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>As a client, you agree to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Provide accurate information about your property and project requirements</li>
                  <li>Ensure access to the work site during agreed hours</li>
                  <li>Remove or protect personal belongings in the work area</li>
                  <li>Make timely decisions on material selections and design choices</li>
                  <li>Maintain clear communication throughout the project</li>
                  <li>Make payments according to the agreed schedule</li>
                  <li>Obtain necessary approvals from HOA or landlords if applicable</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Warranties</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  We provide warranties on our workmanship and materials as follows:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Workmanship:</strong> One-year warranty on labor and installation</li>
                  <li><strong>Materials:</strong> Manufacturer warranties apply to all materials and products</li>
                  <li><strong>Cabinets:</strong> Limited lifetime warranty on cabinet boxes, specific warranty terms vary by manufacturer</li>
                </ul>
                <p className="mt-3">
                  Warranties do not cover damage resulting from misuse, neglect, accidents, or normal wear and tear.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Cancellation and Refunds</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  <strong>Before Work Begins:</strong> Clients may cancel the contract before work begins with written notice. Deposits may be partially or fully refundable depending on materials ordered and time invested.
                </p>
                <p>
                  <strong>After Work Begins:</strong> If cancellation occurs after work has started, the client is responsible for all completed work, materials purchased, and a cancellation fee as specified in the contract.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                To the fullest extent permitted by law, Kitch Design Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to our services. Our total liability shall not exceed the total amount paid by the client for the specific project in question.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Insurance and Licenses</h2>
              <p className="text-gray-700 leading-relaxed">
                Kitch Design Studio maintains appropriate licenses and insurance coverage, including general liability and workers' compensation insurance. Copies of our licenses and insurance certificates are available upon request.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Permits and Inspections</h2>
              <p className="text-gray-700 leading-relaxed">
                We will obtain necessary building permits as required by local regulations. The cost of permits is typically included in the project contract unless otherwise specified. All work will be performed in accordance with local building codes and will be subject to inspection by local authorities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  In the event of any dispute arising from these Terms or our services:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Both parties agree to first attempt to resolve the dispute through good-faith negotiation</li>
                  <li>If negotiation fails, the dispute may be submitted to mediation</li>
                  <li>If mediation is unsuccessful, the dispute shall be resolved through binding arbitration in Cherry Hill, New Jersey</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All designs, plans, and drawings created by Kitch Design Studio remain our intellectual property. Clients receive a license to use these designs for their specific project. We reserve the right to photograph completed projects for marketing purposes unless the client objects in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Force Majeure</h2>
              <p className="text-gray-700 leading-relaxed">
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, pandemics, government regulations, labor disputes, or material shortages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of New Jersey, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-2">
                <p className="text-gray-900 font-semibold">Kitch Design Studio</p>
                <p className="text-gray-700">Cherry Hill, NJ</p>
                <p className="text-gray-700">Phone: (856) 398-3087</p>
                <p className="text-gray-700">Email: info@kitchdesigns.com</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-600 italic">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
