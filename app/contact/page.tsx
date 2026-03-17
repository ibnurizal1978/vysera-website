import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Vysera Contact",
    alternates: {
        canonical: "https://getvysera.com/contact",
    },
}

export default function Contact() {
    return (
        <div>
            <link rel="stylesheet" href="/css/pricing.css" />

            <section className="pricing-page-header">
                <div className="container">
                    <div className="badge">Contact</div>
                    <h1>Get in touch</h1>
                    <p className="hero-sub">We're here to help. Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>
            </section>

            <section className="pricing-container">
                <div data-aidaform-app="form202405" data-url="https://argares.aidaform.com/vysera-contact" data-width="100%"
                    data-height="500px" data-do-resize></div>
                <Script src="https://widget.aidaform.com/embed.js" />
            </section>
        </div>
    );
}