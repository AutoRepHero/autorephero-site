export default function TermsOfService() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 20px', color: '#e2e8f0', fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, color: '#fff' }}>Terms of Service</h1>
      <p style={{ color: '#888', fontSize: 14, marginBottom: 32 }}>Last updated: March 16, 2026</p>

      <p>These Terms of Service ("Terms") govern your use of AutoRepHero's services, including our website (autorephero.com), applications, and SMS messaging services. By using our services, you agree to these Terms.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>1. Services</h2>
      <p>AutoRepHero provides automated reputation management tools for local businesses, including:</p>
      <ul style={{ paddingLeft: 24 }}>
        <li>Review request and collection systems (RRDS)</li>
        <li>NFC and QR-based review sharing tools</li>
        <li>AI-assisted review writing prompts</li>
        <li>Automated SMS and email follow-up messaging</li>
        <li>Business citation and listing management</li>
        <li>Digital business card creation (Rapid Business Card)</li>
        <li>Content creation tools</li>
      </ul>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>2. SMS Messaging Terms</h2>
      <p>By opting in to AutoRepHero's SMS services, you agree to the following:</p>
      <ul style={{ paddingLeft: 24 }}>
        <li><strong>Consent:</strong> You consent to receive automated text messages related to review requests, service follow-ups, appointment reminders, and account notifications.</li>
        <li><strong>Frequency:</strong> Message frequency varies. Typical usage is 1-4 messages per month per customer interaction.</li>
        <li><strong>Costs:</strong> Message and data rates may apply depending on your carrier and plan.</li>
        <li><strong>Opt-out:</strong> You may opt out at any time by replying STOP to any message. You will receive a confirmation and no further messages will be sent.</li>
        <li><strong>Help:</strong> Reply HELP for assistance, or contact us at (509) 818-0787 or chuck@autorephero.com.</li>
        <li><strong>Carriers:</strong> Carriers are not liable for delayed or undelivered messages.</li>
      </ul>
      <p>SMS messages are sent from (509) 822-5859 via Twilio. We comply with TCPA, CTIA, and carrier requirements for A2P (Application-to-Person) messaging.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>3. User Accounts</h2>
      <p>You are responsible for maintaining the security of your account credentials. You agree to provide accurate business information for service setup and 10DLC compliance.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>4. Acceptable Use</h2>
      <p>You agree NOT to use our services to:</p>
      <ul style={{ paddingLeft: 24 }}>
        <li>Send spam or unsolicited messages</li>
        <li>Generate fake or incentivized reviews</li>
        <li>Violate Google, Yelp, Facebook, or any platform's review policies</li>
        <li>Collect data without proper consent</li>
        <li>Impersonate another business or individual</li>
        <li>Engage in any illegal activity</li>
      </ul>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>5. Review Compliance</h2>
      <p>AutoRepHero's AI review starters are provided as suggestions only. Users and their customers are solely responsible for ensuring all reviews are authentic, personalized, and compliant with platform policies. We do not guarantee review placement or rankings.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>6. Payments & Subscriptions</h2>
      <ul style={{ paddingLeft: 24 }}>
        <li>Subscription fees are billed monthly via Stripe</li>
        <li>One-time fees (Deployment Kits, Citation Boosts) are non-refundable after fulfillment</li>
        <li>You may cancel your subscription at any time — service continues through the end of the billing period</li>
        <li>SMS usage overage may be billed separately at published per-message rates</li>
      </ul>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>7. Limitation of Liability</h2>
      <p>AutoRepHero is provided "as is." We are not responsible for changes in review platform policies, carrier message delivery, search engine rankings, or third-party service availability. Our total liability is limited to the amount you paid for services in the prior 12 months.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>8. Termination</h2>
      <p>We reserve the right to suspend or terminate accounts that violate these Terms, engage in review manipulation, or misuse our SMS services.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>9. Changes to Terms</h2>
      <p>We may update these Terms from time to time. Continued use of our services constitutes acceptance of updated Terms.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>10. Contact</h2>
      <p>
        AutoRepHero<br />
        Phone: <a href="tel:+15098180787" style={{ color: '#34d399' }}>(509) 818-0787</a><br />
        SMS Line: <a href="tel:+15098225859" style={{ color: '#34d399' }}>(509) 822-5859</a><br />
        Email: <a href="mailto:chuck@autorephero.com" style={{ color: '#34d399' }}>chuck@autorephero.com</a><br />
        Website: <a href="https://autorephero.com" style={{ color: '#34d399' }}>autorephero.com</a><br />
        Spokane, WA
      </p>

      <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid #333', textAlign: 'center' }}>
        <a href="/" style={{ color: '#888', textDecoration: 'none', fontSize: 14 }}>← Back to Home</a>
      </div>
    </div>
  );
}
