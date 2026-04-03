import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers",
    description: "Vysera Careers",
    alternates: {
        canonical: "https://getvysera.com/careers",
    },
}

export default function Careers() {
    return (
        <div>
            <link rel="stylesheet" href="/css/pricing.css" />

            <section className="pricing-page-header">
                <div className="container">
                    <div className="badge">Careers</div>
                    <h1>Join our team</h1>
                    <p className="hero-sub">We are not opening any job vacancies at the moment. Stay tuned for future opportunities.
                    </p>
                </div>
            </section>
        </div>
    );
}