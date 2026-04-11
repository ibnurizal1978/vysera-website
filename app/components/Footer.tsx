import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to optimize your renewal process?</h2>
                        <p>Use Vysera to manage your renewals and avoid compliance issues.</p>
                        <a href="https://apps.getvysera.com/signup" className="btn btn-primary btn-lg">Get Started for Free</a>
                        <br /><small>No credit card required.</small>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container footer-container">
                    <div className="footer-col">
                        <Link href="/" className="logo">Vysera</Link>
                        <p>The employee certification tracking software for modern teams. Manage your employee credentials, training certificates, licenses, and more in one place.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Product</h4>
                        <Link href="/features">Features</Link>
                        <Link href="/pricing">Pricing</Link>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/resources">Resources</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-of-service">Terms of Service</Link>
                    </div>
                </div>
                <div className="container copyright">
                    <p>&copy; 2025 Vysera Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}