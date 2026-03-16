export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 20px', color: '#e2e8f0', fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, color: '#fff' }}>Privacy Policy</h1>
      <p style={{ color: '#888', fontSize: 14, marginBottom: 32 }}>Last updated: March 16, 2026</p>

      <p>AutoRepHero ("we," "us," or "our") operates autorephero.com and related services. This Privacy Policy explains how we collect, use, and protect your information.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>Information We Collect</h2>
      <p>We may collect the following information when you use our services or fill out forms on our website:</p>
      <ul style={{ paddingLeft: 24 }}>
        <li>Full name</li>
        <li>Business name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Website URL</li>
        <li>Business address</li>
      </ul>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>How We Use Your Information</h2>
      <ul style={{ paddingLeft: 24 }}>
        <li>To provide our review management and reputation services</li>
        <li>To send automated SMS review request messages on behalf of your business</li>
        <li>To send service-related communications (account updates, support)</li>
        <li>To improve our products and services</li>
        <li>To process payments and manage subscriptions</li>
      </ul>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>SMS/Text Messaging</h2>
      <p>By providing a phone number and opting in to our services, you consent to receive automated text messages related to review requests, service follow-ups, and account notifications. Message frequency varies. Message and data rates may apply.</p>
      <p><strong>To opt out:</strong> Reply STOP to any message. You will receive a confirmation and no further messages will be sent.</p>
      <p><strong>For help:</strong> Reply HELP or contact us at (509) 818-0787 or chuck@autorephero.com.</p>
      <p>We use Twilio as our SMS service provider. Messages are sent from (509) 822-5859.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>Data Sharing</h2>
      <p>We do <strong>not</strong> sell, trade, or rent your personal information to third parties. We may share data with:</p>
      <ul style={{ paddingLeft: 24 }}>
        <li><strong>Service providers:</strong> Twilio (SMS), Stripe (payments), Vercel (hosting) — only as necessary to provide our services</li>
        <li><strong>Legal requirements:</strong> If required by law or to protect our rights</li>
      </ul>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>Data Security</h2>
      <p>We implement industry-standard security measures to protect your information, including encrypted connections (SSL/TLS), secure data storage, and access controls.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>Cookies</h2>
      <p>We may use cookies to improve your experience on our website. You can disable cookies in your browser settings.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>Your Rights</h2>
      <p>You may request to access, update, or delete your personal information at any time by contacting us.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>Children's Privacy</h2>
      <p>Our services are not directed to individuals under 18. We do not knowingly collect information from children.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 32, color: '#fff' }}>Contact Us</h2>
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
