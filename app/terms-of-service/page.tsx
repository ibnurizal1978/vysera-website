import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description: "Vysera Terms and Conditions",
    alternates: {
        canonical: "https://getvysera.com/terms-and-conditions",
    },
}

export default function TermsAndConditions() {
    return (
        <div>
            <link rel="stylesheet" href="/css/pricing.css" />

            <section className="pricing-page-header">
                <div className="container">
                    <div className="badge">Terms of Service</div>
                    <h1>Terms of Service</h1>
                    <p className="hero-sub">Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before
                        using the Vysera website and the document reminder service (the "Service") operated by Vysera ("us", "we",
                        or "our").
                    </p>
                </div>
            </section>

            <section className="pricing-container">
                <p className="text-xl text-left text-gray-600 mb-16 mx-auto">
                    Last Updated: January 03, 2026
                    <br /><br />
                    Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Vysera
                    website and the document reminder service (the "Service") operated by Argares ("us", "we", or "our").
                    <br /><br />
                    Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
                    These Terms apply to all visitors, users, and others who access or use the Service.
                    <br /><br />
                    <b>1. Acceptance of Terms</b>
                    <br />
                    By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the
                    terms, then you may not access the Service.
                    <br /><br />
                    <b>2. Service Description</b>
                    <br />
                    Vysera is a subscription-based software service designed to facilitate the storage of user-uploaded documents
                    and provide automated reminder notifications based on user-defined schedules (the "Service").
                    <br /><br />
                    <b>3. User Accounts and Responsibilities</b>
                    <br /><br />
                    3.1. Account Registration<br />You must provide accurate and complete information when creating an account.
                    <br /><br />
                    3.2. Security<br />You are responsible for safeguarding the password that you use to access the Service and for
                    any
                    activities or actions under your password.
                    <br /><br />
                    3.3. Prohibited Use<br />You agree not to upload any content that is illegal, defamatory, hateful, or violates
                    any
                    third-party rights, including intellectual property and privacy rights.
                    <br /><br />
                    3.4. Malware and Security Responsibility<br />You represent and warrant that any User Data you upload to the
                    Service is free from viruses, malware, trojans,
                    worms, spyware, ransomware, or any other malicious or harmful code ("Malicious Code"). You are solely
                    responsible for scanning and ensuring the security of all content before uploading. We reserve the right to
                    remove, quarantine, or disable access to any content suspected of containing Malicious Code without prior notice
                    or liability.
                    <br /><br />
                    <b>4. Subscriptions and Payment</b>
                    <br /><br />
                    4.1. Subscription Plans<br />The Service is offered under various subscription plans (e.g., Free, Standard,
                    Premium).
                    Features, storage limits, and other features vary by plan.
                    <br /><br />
                    4.2. Billing<br />Billing is processed on a recurring, periodic basis (monthly or annually). You will be billed
                    in
                    advance for the period specified in your subscription plan.
                    <br /><br />
                    4.3. Refunds<br />To submit a refund request, please send an email to hello@getvysera.com with the email
                    subject line
                    'REFUND'. Be sure to include the username or email address you use for logging in within the body of the email.
                    <br /><br />
                    <b>5. Intellectual Property and User Data</b>
                    <br /><br />
                    5.1. Ownership of Service<br />The Service and its original content, features, and functionality are and will
                    remain the
                    exclusive property of Vysera.
                    <br /><br />
                    5.2. Ownership of User Data<br />You retain all ownership rights to the documents and data you upload to the
                    Service
                    ("User Data"). We do not claim ownership over your User Data.
                    <br /><br />
                    5.3. License to Us<br />By uploading User Data, you grant us a worldwide, non-exclusive, royalty-free license
                    to use,
                    host, store, transfer, display, and modify (solely for the purpose of proper storage and display) your User Data
                    only as necessary to provide the Service to you.
                    <br /><br />
                    <b>6. Backup and Data Availability</b>
                    <br /><br />
                    6.1. General Backup Policy (Paid Accounts)
                    <br />
                    We employ reasonable efforts and industry-standard practices to ensure the durability and availability of User
                    Data stored in our production environment. For Paid Subscription Accounts, we maintain a data backup strategy
                    intended for disaster recovery and service restoration. However, we do not guarantee against the loss of any
                    User Data and recommend that you maintain your own independent backups of all documents.
                    <br /><br />
                    6.2. Free Account Disclaimer
                    <br />
                    Users utilizing the Free Subscription Plan ("Free Accounts") acknowledge and agree that Vysera does not provide
                    any guarantee of data backup or recovery services for their User Data.
                    <br /><br />
                    6.3. No Redundancy Guarantee<br />
                    Data associated with Free Accounts may be stored with limited or no redundancy compared to Paid Accounts.
                    <br /><br />
                    6.4. Data Deletion<br />
                    We reserve the right to delete, without prior notice, User Data and/or Free Accounts that remain
                    inactive for a period of 90 days or if necessary for resource management.
                    <br /><br />
                    6.5. Liability Waiver<br />
                    By using a Free Account, you waive any claim against Vysera for any loss or deletion of your
                    User Data.
                    <br /><br />
                    6.6. Disaster Recovery Limitations<br />
                    Our disaster recovery procedures are designed for service restoration, not individual data recovery. In the
                    event of catastrophic failure: (a) recovery point objectives (RPO) may result in data loss up to 24 hours; (b)
                    recovery time objectives (RTO) may exceed 72 hours; (c) we prioritize restoration of service functionality over
                    individual file recovery.
                    <br /><br />
                    <b>7. Termination</b>
                    <br /><br />
                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                    whatsoever, including without limitation if you breach the Terms.
                    <br /><br />
                    Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account,
                    you may simply discontinue using the Service.
                    <br /><br />
                    <b>8. Limitation of Liability</b>
                    <br /><br />
                    In no event shall Vysera, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable
                    for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of
                    profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or
                    inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any
                    content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or
                    content, including, but not limited to, the loss or corruption of any User Data, especially for Free Accounts.
                    <br /><br />
                    <b>9. Third-Party Infrastructure Disclaimer</b>
                    <br /><br />
                    The Service utilizes third-party infrastructure, services, and data centers (including but not limited to cloud
                    storage providers, hosting services, and network providers). We are not liable for any loss, corruption,
                    deletion, or unavailability of User Data resulting from: (a) failures, outages, or disruptions of third-party
                    infrastructure; (b) actions or omissions of third-party service providers; (c) force majeure events affecting
                    third-party systems; or (d) security breaches occurring at third-party facilities. While we select reputable
                    providers, we do not guarantee their performance or reliability.
                    <br /><br />
                    <b>10. Data Processing and Technical Limitations</b>
                    <br /><br />
                    10.1. Service-Level Limitations
                    <br /><br />
                    You acknowledge that the Service is provided "as is" and "as available" with inherent technical limitations. We
                    do not guarantee: (a) uninterrupted, secure, or error-free operation; (b) that defects will be corrected; (c)
                    compatibility with all devices or software; or (d) that the Service will meet all your requirements.
                    <br /><br />
                    10.2. Document Integrity
                    <br /><br />
                    While we implement industry-standard measures to preserve data integrity, we are not responsible for: (a)
                    corruption of files during upload/download due to network issues; (b) format compatibility problems; (c)
                    metadata loss during processing; or (d) changes in file properties caused by storage system operations.
                    <br /><br />
                    10.3. Encryption Disclaimer
                    <br /><br />
                    Documents may be transmitted and stored with encryption, but you acknowledge that no method of electronic
                    transmission or storage is 100% secure. For highly sensitive documents, you are responsible for implementing
                    additional encryption before uploading.
                    <br /><br />
                    <b>11. Governing Law</b>
                    <br /><br />
                    These Terms shall be governed and construed in accordance with the laws of the Republic of Indonesia, without
                    regard to its conflict of law provisions.
                    <br /><br />
                    <b>12. Changes to Terms</b>
                    <br /><br />
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to
                    provide at least 30 days notice prior to any new terms taking effect. By continuing to access or use our Service
                    after those revisions become effective, you agree to be bound by the revised terms.
                    <br /><br />
                    <b>13. Contact Us</b>
                    <br /><br />
                    If you have any questions about these Terms, please contact us at: hello@getvysera.com.
                    <br /><br />
                </p>
            </section>
        </div>
    )
}