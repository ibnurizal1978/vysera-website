import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features",
    description: "Vysera Features",
    alternates: {
        canonical: "https://getvysera.com/features",
    },
}

export default function features() {
    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header">
                    <h2>Everything you need to <span className="gradient-text">track an employee certification expiration date</span></h2>
                    <p>Powerful features designed to give you complete visibility over your employee certification and renewal process lifecycle.</p>
                </div>

                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <img src="/img/1.webp" alt="Tiered Reminders" className="feature-icon" />
                        </div>
                        <h3>Smart Reminders</h3>
                        <p>Get alerted 90, 30, 7 or any days before any cert expires. Never get blindsided again.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <img src="/img/2.webp" alt="Email Integration" className="feature-icon" />
                        </div>
                        <h3>Multiple Reminder Items</h3>
                        <p>Track contracts, training certs, licenses, work permits and else in one place per employee.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <img src="/img/3.webp" alt="Team Access" className="feature-icon" />
                        </div>
                        <h3>Team Collaboration</h3>
                        <p>Assign document ownership to a specific user. Accountability is built in, not bolted on.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <img src="/img/4.webp" alt="Asset Management" className="feature-icon" />
                        </div>
                        <h3>Credential Tracking</h3>
                        <p>Full audit trail of every certification, renewal, and its expiry date. Ready for inspection in minutes.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <img src="/img/5.webp" alt="Asset Management" className="feature-icon" />
                        </div>
                        <h3>Notification to Email</h3>
                        <p>Reminders go straight to your inbox, no need to install another app to check, no need to change habits.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <img src="/img/6.webp" alt="Asset Management" className="feature-icon" />
                        </div>
                        <h3>Multi-Receivers</h3>
                        <p>Alert the HR manager, the employee, and their supervisor. Everyone is in the loop.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}