import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Resources",
    description: "Vysera Resources",
    alternates: {
        canonical: "https://getvysera.com/resources",
    },
}

export default function Resources() {
    return (
        <div>
            <link rel="stylesheet" href="/css/faq.css" />

            <section className="page-header">
                <div className="container">
                    <div className="badge">Resources</div>
                    <h1>Resources Library</h1>
                    <p className="hero-sub">Explore articles, guides, and templates to help you manage contracts, renewals, and other employee credentials with ease.</p>
                </div>
            </section>

            <section className="features-detailed">
                <div className="faq-list">
                    <div className="faq-item">
                        <div className="faq-answer">
                            <p><Link href="/resources/the-invisible-cost-of-forgotten-contracts-why-manual-tracking-is-killing-your-roi">The Invisible Cost of Forgotten Contracts: Why Manual Tracking is Killing Your ROI</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}