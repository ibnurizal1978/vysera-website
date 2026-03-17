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
                        <p>With Smart Reminders, you can configure alerts at any number of days before an item expires. This
                            ensures your team has ample time to renegotiate terms and preparing a new contract.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <img src="/img/2.webp" alt="Email Integration" className="feature-icon" />
                        </div>
                        <h3>Multiple Reminder Items</h3>
                        <p>Set a multiple reminder items for each employee. From work contracts, training certificates, licenses, and more.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <img src="/img/3.webp" alt="Team Access" className="feature-icon" />
                        </div>
                        <h3>Team Collaboration</h3>
                        <p>Assign owners to specific assets and manage application access with multi-user access controls.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <img src="/img/4.webp" alt="Asset Management" className="feature-icon" />
                        </div>
                        <h3>Credential Tracking</h3>
                        <p>Keep track of all your employee credentials, training certificates, licenses, and more.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <img src="/img/5.webp" alt="Asset Management" className="feature-icon" />
                        </div>
                        <h3>Notification to Email</h3>
                        <p>Vysera will send a notification to your email when the reminder is due based on the reminder period
                            you set.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <img src="/img/6.webp" alt="Asset Management" className="feature-icon" />
                        </div>
                        <h3>Multi-Receivers</h3>
                        <p>Set a multiple receiver for each reminder item. You can set a multiple receiver for each reminder
                            item.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}