import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description: "Vysera Pricing",
    alternates: {
        canonical: "https://getvysera.com/pricing",
    },
}

export default function Pricing() {
    return (
        <div>
            <link rel="stylesheet" href="../../css/pricing.css" />
            <section className="pricing-page-header">
                <div className="container">
                    <div className="badge">Pricing</div>
                    <h1>Simple, transparent <span className="gradient-text">pricing</span></h1>
                    <p className="hero-sub">Choose the plan that fits your needs. No hidden fees. Cancel anytime.</p>
                </div>
            </section>

            <section className="pricing-container">
                <div className="pricing-plans-grid">
                    {/* Free Plan */}
                    <div className="pricing-plan-card">
                        <div className="most-popular-badge">Most Popular</div>
                        <div className="plan-name">Built-in</div>
                        <div className="plan-price">$2.99<span>/user/mo</span></div>
                        <p className="plan-description">Perfect for tracking employee credentials, training certificates, licenses, and more.</p>

                        <ul className="plan-features">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Data Backup
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Support Assistance
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Multiple Reminder Notifications
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Document Upload (Certificates, Work Contract, etc)
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Calendar View
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Dashboard Reporting
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Email Reminder
                            </li>
                        </ul>

                        <a href="https://apps.getvysera.com/signup?p11567" className="btn btn-primary btn-full">Start 14-dayFree Trial</a>
                        <br /><small className="text-secondary">No credit card required during trial.</small>
                    </div>

                    {/* Pro Plan */}
                    <div className="pricing-plan-card pro-plan">
                        <div className="plan-name">Custom</div>
                        <div className="plan-price">$Call</div>
                        <p className="plan-description">For custom requirements.</p>

                        <ul className="plan-features">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <b>Everything in Built-in, plus:</b>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Custom dashboards
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Configurable application modules
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Customize Business Processes
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Dedicated Server
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Priority Support
                            </li>
                        </ul>

                        <Link href="/contact" className="btn btn-primary btn-full">Contact Us</Link>
                        <br /><small className="text-secondary">Let's discuss your requirements.</small>
                    </div>
                </div>

            </section>
        </div>
    );
}