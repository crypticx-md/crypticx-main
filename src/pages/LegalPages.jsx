import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '../data/contact';

// These policies are working drafts for owner/legal review before production release.
const company = 'CrypticX Technologies Ltd';
const updated = '28 October 2026';

function LegalLayout({ title, children }) {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <article className="glass-panel mx-auto max-w-4xl p-6 md:p-12">
        <Link to="/" className="text-sm font-semibold text-cyan-600 hover:underline dark:text-cyan-300">
          ← Back to CrypticX
        </Link>
        <p className="section-eyebrow mt-8">Legal</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Last updated: {updated}</p>
        <div className="mt-8 space-y-7 text-sm leading-7 text-slate-700 dark:text-slate-300">{children}</div>
      </article>
    </div>
  );
}
function Section({ title, children }) {
  return (
    <section className="space-y-2">
      <h2 className="text-xl font-bold text-slate-950 dark:text-white">{title}</h2>
      {children}
    </section>
  );
}
function Email() {
  return <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-700 underline dark:text-cyan-300">{CONTACT_EMAIL}</a>;
}

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <Section title="Who we are">
        <p>{company}, registered in England and Wales (company number 17374203), with registered office at 128 City Road, London, United Kingdom, EC1V 2NX, is responsible for handling personal information submitted through this website. Contact us at <Email />.</p>
      </Section>
      <Section title="Information we receive">
        <p>When you contact us about a project, you may provide a name, email address, telephone number, project description and optional PDF brief. Website hosting and form services may process technical information needed to operate and protect the site.</p>
      </Section>
      <Section title="How and why we use information">
        <p>We use enquiries to answer questions, discuss quotes and take steps towards providing requested services. Depending on the circumstances, our lawful basis is taking steps at your request before entering into a contract or our legitimate interest in responding to business enquiries. We may also retain necessary records to comply with legal obligations. Submitting an enquiry does not subscribe you to unrelated marketing messages.</p>
      </Section>
      <Section title="Third parties and international handling">
        <p>Website enquiry forms use FormSubmit to deliver submissions and uploaded files to our business email. Our email provider handles this correspondence, and Vercel hosts the website. These service providers may process data in different countries; processing must meet applicable data protection requirements. Please do not upload unnecessary confidential or sensitive data.</p>
      </Section>
      <Section title="How long we keep information">
        <p>We retain enquiries for as long as reasonably necessary to respond, maintain relevant business records or meet legal obligations. The duration depends on the enquiry and whether it results in a client relationship.</p>
      </Section>
      <Section title="Your rights">
        <p>Depending on your circumstances and applicable law, you may have the right to access, correct or erase your personal information, to restrict or object to certain processing, or to request data portability. To exercise your rights, contact <Email />. You can also complain to the UK's Information Commissioner's Office or, where applicable, an EU data protection authority.</p>
      </Section>
      <Section title="Policy changes">
        <p>We may update this notice when our data handling or the website changes. The date above indicates the latest version.</p>
      </Section>
    </LegalLayout>
  );
}

export function TermsAndConditions() {
  return (
    <LegalLayout title="Terms & Conditions">
      <Section title="Website operator">
        <p>This website is provided by {company}, company number 17374203, registered in England and Wales. Contact us at <Email />.</p>
      </Section>
      <Section title="Using the website">
        <p>Use the site lawfully. Do not interfere with its operation, attempt unauthorised access, submit harmful files, or misrepresent your identity. Website descriptions are for general information and may change.</p>
      </Section>
      <Section title="Enquiries are not contracts">
        <p>Submitting an enquiry does not create a contract, guarantee a quotation or reserve development capacity. Project scope, pricing, deliverables, payments, intellectual property and support are agreed separately in a signed proposal or services agreement before work begins.</p>
      </Section>
      <Section title="Content and external links">
        <p>Our branding and site content belong to {company} or their respective owners. Do not reproduce protected material without permission. Links to third-party services are for convenience, and those providers control their own content and terms.</p>
      </Section>
      <Section title="Availability and responsibility">
        <p>We aim to maintain accurate content and a working website, but do not guarantee uninterrupted access. Nothing here excludes liability that cannot lawfully be excluded or limits mandatory statutory rights.</p>
      </Section>
      <Section title="Questions">
        <p>For questions about use of this website, contact <Email />.</p>
      </Section>
    </LegalLayout>
  );
}

export function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy">
      <Section title="What are cookies?">
        <p>Cookies and similar technologies are small pieces of information that websites or third parties may store on your device for security, functionality, measurement or preferences.</p>
      </Section>
      <Section title="Cookies on CrypticX">
        <p>The current CrypticX application does not intentionally include its own advertising or analytics cookie scripts. External form services, including FormSubmit and its spam protection, may use cookies or related technologies when you interact with a form. Websites you visit through our external links may use their own cookies.</p>
      </Section>
      <Section title="Your choices">
        <p>You can review, delete or block cookies in your browser settings. Disabling certain technologies may affect third-party forms or security checks.</p>
      </Section>
      <Section title="Changes and contact">
        <p>We will review this notice if analytics, advertising or other technologies are added. For questions, email <Email />.</p>
      </Section>
    </LegalLayout>
  );
}
