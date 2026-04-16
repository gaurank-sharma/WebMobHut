export default function Privacy() {
  return (
    <div className="min-h-screen font-sans
      bg-white text-gray-900
      dark:bg-black dark:text-white">
      <section className="pt-36 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2eaff0] mb-4 block">Legal</span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-10">Privacy Policy</h1>
          <div className="h-px mb-10 bg-gray-200 dark:bg-neutral-800" />

          <div className="space-y-8 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            <div>
              <p className="text-xs mb-6 text-gray-400 dark:text-gray-600">Last updated: January 2024</p>
              <p>
                WebMobHut Pvt Ltd ("we", "us", or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website{' '}
                <strong className="text-gray-900 dark:text-white">www.webmobhut.com</strong>.
              </p>
            </div>

            {[
              {
                title: '1. Information We Collect',
                content: 'We collect information you voluntarily provide to us when you fill out our contact form — including your name, email address, phone number, company name, and message. We do not collect sensitive personal information.',
              },
              {
                title: '2. How We Use Your Information',
                content: 'We use the information you provide solely to respond to your enquiries, provide requested services, improve our website experience, and send relevant communications about our events and services. We do not sell, trade, or rent your personal information to third parties.',
              },
              {
                title: '3. Data Storage & Security',
                content: 'Your data is stored securely on MongoDB Atlas (cloud database). We use industry-standard encryption and access controls to protect your information. Images are stored on Cloudinary CDN with secure access.',
              },
              {
                title: '4. Cookies',
                content: 'Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings. Disabling cookies may affect some functionality of the website.',
              },
              {
                title: '5. Third-Party Services',
                content: 'We use Cloudinary for image delivery and MongoDB for data storage. These services have their own privacy policies and we encourage you to review them. We do not share your personal data with these services beyond what is necessary for operations.',
              },
              {
                title: '6. Your Rights',
                content: 'You have the right to access, correct, or delete any personal information we hold about you. To exercise these rights, please contact us at webmobhut@gmail.com.',
              },
              {
                title: '7. Changes to This Policy',
                content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. Continued use of the website after changes constitutes your acceptance of the updated policy.',
              },
              {
                title: '8. Contact Us',
                content: 'If you have any questions about this Privacy Policy, please contact us at webmobhut@gmail.com or call +91-9910319121.',
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
