import Link from "next/link";
export default function Header() {
    return (
        <header>
            <div className="background-glow"></div>

            <nav className="navbar">
                <div className="container nav-container">
                    <Link href="/" className="logo"><img src="/img/logo.png" alt="Vysera" className="w-[140px] h-auto"
                        width="140" /></Link>
                    <div className="nav-links">
                        <Link href="/features">Features</Link>
                        <Link href="/pricing">Pricing</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className="nav-actions">
                        <a href="https://apps.getvysera.com/signup" className="btn btn-text">Sign up</a>
                        <a href="https://apps.getvysera.com" target="_blank" className="btn btn-primary">Log in</a>
                    </div>
                    <button className="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle mobile menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                {/* mobile menu */}
                <div className="mobile-menu" id="mobileMenu">
                    <div className="mobile-menu-inner">
                        <Link href="/features" className="mobile-menu-link">Features</Link>
                        <Link href="/pricing" className="mobile-menu-link">Pricing</Link>
                        <Link href="/contact" className="mobile-menu-link">Contact</Link>
                        <div className="mobile-menu-buttons">
                            <a href="https://apps.getvysera.com/signup" className="btn btn-text mobile-btn-full">Sign up</a>
                            <a href="https://apps.getvysera.com" target="_blank" className="btn btn-primary mobile-btn-full">Log
                                in</a>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu-overlay" id="mobileMenuOverlay"></div>
            </nav>
            <script src="/js/mobile-menu.js"></script>
        </header>
    );
}