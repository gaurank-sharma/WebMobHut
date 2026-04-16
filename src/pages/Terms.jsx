export default function Terms() {
  return (
    <div className="min-h-screen font-sans
      bg-white text-gray-900
      dark:bg-black dark:text-white">
      <section className="pt-36 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">

          {/* Header */}
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2eaff0] mb-4 block">Legal</span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-gray-400 dark:text-gray-600 mb-10">Last updated: January 2024</p>
          <div className="h-px mb-10 bg-gray-200 dark:bg-neutral-800" />

          <div className="space-y-10 text-sm leading-relaxed text-gray-500 dark:text-gray-400">

            {/* Intro */}
            <p>
              Welcome to <strong className="text-gray-900 dark:text-white">WebMobHut Pvt Ltd</strong>. By accessing or using our website{' '}
              <strong className="text-gray-900 dark:text-white">www.webmobhut.com</strong> you agree to be bound by these Terms &amp; Conditions. Please read them carefully before using our services.
            </p>

            {[
              {
                title: '1. Acceptance of Terms',
                content: 'By accessing our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions, our Privacy Policy, and any other guidelines we may publish. If you do not agree, please discontinue use of our website immediately.',
              },
              {
                title: '2. Services Provided',
                content: 'WebMobHut Pvt Ltd provides event management services including, but not limited to, mall activations, retail décor, corporate events, brand activations, and experiential marketing campaigns. The exact scope of services for each engagement is defined in a separate written agreement between WebMobHut and the client.',
              },
              {
                title: '3. Intellectual Property',
                content: 'All content on this website — including text, graphics, logos, photographs, videos, and event concepts — is the exclusive property of WebMobHut Pvt Ltd or its licensors and is protected by applicable copyright, trademark, and intellectual property laws. You may not reproduce, distribute, modify, or publicly display any material without our prior written consent.',
              },
              {
                title: '4. Use of Website',
                content: 'You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not attempt to gain unauthorised access to any part of the website, transmit harmful code or malware, or engage in any activity that disrupts the website\'s functionality or reputation.',
              },
              {
                title: '5. Client Engagements & Payments',
                content: 'All service engagements are governed by a separate signed contract or proposal document. Payment terms, cancellation policies, and deliverables are specified in those agreements. Advance payments made are non-refundable unless otherwise stated in writing. WebMobHut reserves the right to pause or terminate services in the event of non-payment.',
              },
              {
                title: '6. Confidentiality',
                content: 'Both parties agree to keep confidential any proprietary information, business strategies, or client data shared during the course of an engagement. This obligation survives the termination of the service relationship. WebMobHut will not publicly reference client names, logos, or campaign details without prior written permission.',
              },
              {
                title: '7. Limitation of Liability',
                content: 'WebMobHut Pvt Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services, including loss of data, revenue, or business opportunities. Our total liability in any matter shall not exceed the fees paid by you for the specific service in question.',
              },
              {
                title: '8. Force Majeure',
                content: 'WebMobHut shall not be held liable for any failure or delay in performance resulting from events beyond our reasonable control, including natural disasters, government restrictions, power outages, pandemics, or other unforeseen circumstances. We will notify affected clients promptly and work to reschedule or restructure the engagement.',
              },
              {
                title: '9. Third-Party Links',
                content: 'Our website may contain links to third-party websites for reference or convenience. WebMobHut does not endorse, control, or take responsibility for the content, privacy practices, or accuracy of any third-party site. Accessing such links is entirely at your own risk.',
              },
              {
                title: '10. Governing Law & Disputes',
                content: 'These Terms & Conditions are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India. We encourage resolving disputes amicably and in good faith before initiating any formal legal proceedings.',
              },
              {
                title: '11. Modifications to Terms',
                content: 'WebMobHut reserves the right to update or revise these Terms & Conditions at any time. Changes will be effective immediately upon posting to this page. Continued use of the website after any changes constitutes your acceptance of the revised terms. We recommend reviewing this page periodically.',
              },
              {
                title: '12. Contact Us',
                content: 'If you have any questions, concerns, or requests regarding these Terms & Conditions, please reach out to us at webmobhut@gmail.com or call +91-9910319121. We\'re happy to clarify any point.',
              },
            ].map(({ title, content }) => (
              <div key={title}>
                <h2 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">{title}</h2>
                <p>{content}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
