import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ",
    description: "Vysera FAQ",
    alternates: {
        canonical: "https://getvysera.com/faq",
    },
}

export default function Faq() {
    return (
        <div>
            <link rel="stylesheet" href="/css/faq.css" />

            <section className="page-header">
                <div className="container">
                    <div className="badge">Frequently Asked Questions</div>
                    <h1>Frequently Asked Questions</h1>
                    <p className="hero-sub">Explore how Vysera helps you manage contracts, renewals, and other employee credentials with ease.</p>
                </div>
            </section>

            <section className="features-detailed">
                <div className="faq-list">
                    {/* FAQ 1 */}
                    <div className="faq-item">
                        <h3 className="faq-question">How can I track multiple contract expiration dates in one place?</h3>
                        <div className="faq-answer">
                            <p>Vysera provides a centralized dashboard where you can monitor all types of expiration
                                dates, from employee contracts renewals, employee credentials, training certificates renewals, and else. Eliminating the need for manual
                                spreadsheets like Excel.</p>
                        </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="faq-item">
                        <h3 className="faq-question">Can I set custom reminder intervals for different renewal documents?</h3>
                        <div className="faq-answer">
                            <p>Yes. Vysera allows you to set custom reminder intervals for different renewal documents.</p>
                        </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="faq-item">
                        <h3 className="faq-question">How do I track employee contract expirations effectively?</h3>
                        <div className="faq-answer">
                            <p>You can automate alerts for fixed-term contracts or probation periods. This ensures your HR team has
                                enough time to prepare renewal documents or performance reviews without last-minute stress.</p>
                        </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="faq-item">
                        <h3 className="faq-question">What is the best tool for property managers to track employee credentials?</h3>
                        <div className="faq-answer">
                            <p>Vysera is designed to help building management team to track employee credentials and other documents. You will get automated notifications before a document expires, helping you maintain compliance and avoid last-minute issues.</p>
                        </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="faq-item">
                        <h3 className="faq-question">Can Vysera be used for tracking other data instead of employee renewals?</h3>
                        <div className="faq-answer">
                            <p>Yes. Vysera can be used for tracking other data instead of employee renewals. You may use our customer solution for tracking other data.</p>
                        </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="faq-item">
                        <h3 className="faq-question">How will I be notified?</h3>
                        <div className="faq-answer">
                            <p>Vysera will send a notification to your email when the reminder is due based on the reminder period
                                you set.</p>
                        </div>
                    </div>

                    {/* FAQ 6 */}
                    <div className="faq-item">
                        <h3 className="faq-question">Can multiple people receive notifications?</h3>
                        <div className="faq-answer">
                            <p>Yes, you can set multiple receivers for each reminder item. Ensure the right people get notified at
                                the right time.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}