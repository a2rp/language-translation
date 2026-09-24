import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
    FiArrowUp,
    FiCheckCircle,
    FiCodepen,
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLifeBuoy,
    FiLinkedin,
    FiMail,
    FiMenu,
    FiMessageCircle,
    FiPlayCircle,
    FiUsers,
    FiX,
} from "react-icons/fi";
import "./App.css";
import "./i18n";

const languageOptions = [
    { code: "en", label: "English", native: "English", icon: FiGlobe },
    { code: "fr", label: "French", native: "Français", icon: FiMessageCircle },
    { code: "hin", label: "Hindi", native: "हिन्दी", icon: FiUsers },
];

const externalLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FiGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FiCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FiLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FiFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FiPlayCircle },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiLifeBuoy },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
    { label: "Patreon", href: "https://patreon.com/a2rp", icon: FiHeart },
];

function App() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showTop, setShowTop] = useState(false);
    const name = "Ashish Ranjan";

    useEffect(() => {
        const handleScroll = () => setShowTop(window.scrollY > 360);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
        setMenuOpen(false);
    };

    const activeLanguage = languageOptions.find(({ code }) =>
        i18n.language?.startsWith(code)
    ) || languageOptions[0];
    const ActiveIcon = activeLanguage.icon;

    return (
        <div className="App">
            <header className="siteHeader">
                <a className="brand" href="#top" aria-label="Language Translation home">
                    <img
                        src={process.env.PUBLIC_URL + "/logo.png"}
                        alt="Language Translation logo"
                    />
                    <span>
                        <small>React i18n demo</small>
                        <strong>Language Translation</strong>
                    </span>
                </a>

                <button
                    className="menuButton"
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-expanded={menuOpen}
                    aria-controls="language-menu"
                    aria-label={menuOpen ? "Close language menu" : "Open language menu"}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                <nav
                    id="language-menu"
                    className={"languageMenu " + (menuOpen ? "isOpen" : "")}
                    aria-label="Language selection"
                >
                    {languageOptions.map(({ code, label, native, icon: Icon }) => (
                        <button
                            key={code}
                            type="button"
                            className={activeLanguage.code === code ? "active" : ""}
                            onClick={() => handleLanguageChange(code)}
                            aria-pressed={activeLanguage.code === code}
                        >
                            <Icon aria-hidden="true" />
                            <span>{label}</span>
                            <small>{native}</small>
                        </button>
                    ))}
                </nav>
            </header>

            <main id="top">
                <section className="hero sectionShell">
                    <div className="heroCopy">
                        <p className="eyebrow">A small multilingual workspace</p>
                        <h1>Language Translation</h1>
                        <p className="heroText">
                            Switch between supported languages and see the same React
                            interface update instantly with i18next.
                        </p>
                        <a className="primaryButton" href="#translation">
                            Explore translations
                            <FiArrowUp aria-hidden="true" className="downIcon" />
                        </a>
                    </div>

                    <div className="heroVisual" aria-label="Current language">
                        <span className="languageOrb">
                            <ActiveIcon aria-hidden="true" />
                        </span>
                        <span className="visualLabel">Current language</span>
                        <strong>{activeLanguage.native}</strong>
                        <small>{activeLanguage.label}</small>
                    </div>
                </section>

                <section id="translation" className="translationSection sectionShell">
                    <div className="sectionHeading">
                        <div>
                            <p className="eyebrow">Live preview</p>
                            <h2>One message, three languages</h2>
                        </div>
                        <span className="statusBadge">
                            <FiCheckCircle aria-hidden="true" />
                            {activeLanguage.label} selected
                        </span>
                    </div>

                    <div className="translationGrid">
                        <article className="translationCard">
                            <div className="cardIcon">
                                <FiGlobe aria-hidden="true" />
                            </div>
                            <p className="cardLabel">Greeting</p>
                            <h3>{t("greeting")}</h3>
                            <p className="cardHint">
                                Loaded from the active locale file.
                            </p>
                        </article>

                        <article className="translationCard featuredCard">
                            <div className="cardIcon">
                                <FiUsers aria-hidden="true" />
                            </div>
                            <p className="cardLabel">Personalised message</p>
                            <h3>{t("iAm", { name })}</h3>
                            <p className="cardHint">
                                Interpolation keeps reusable content dynamic.
                            </p>
                        </article>
                    </div>
                </section>

                <section className="featuresSection sectionShell">
                    <div className="sectionHeading">
                        <div>
                            <p className="eyebrow">Built for learning</p>
                            <h2>Small patterns with practical value</h2>
                        </div>
                    </div>

                    <div className="featureGrid">
                        <article className="featureCard">
                            <FiGlobe aria-hidden="true" />
                            <h3>Locale files</h3>
                            <p>Keep translated copy organized in separate JSON resources.</p>
                        </article>
                        <article className="featureCard">
                            <FiMessageCircle aria-hidden="true" />
                            <h3>Fast switching</h3>
                            <p>Change the active language without leaving the page.</p>
                        </article>
                        <article className="featureCard">
                            <FiCheckCircle aria-hidden="true" />
                            <h3>Reusable strings</h3>
                            <p>Use interpolation to personalise messages from one key.</p>
                        </article>
                    </div>
                </section>
            </main>

            <footer className="siteFooter">
                <div className="footerInner">
                    <p>
                        Copyright © {new Date().getFullYear()}{" "}
                        <a
                            href="https://www.ashishranjan.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ashish Ranjan
                        </a>
                    </p>
                    <div className="footerLinks" aria-label="External links">
                        {externalLinks.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("mailto:") ? undefined : "_blank"}
                                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                aria-label={label}
                                title={label}
                            >
                                <Icon aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>
            </footer>

            {showTop && (
                <button
                    className="topButton"
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Go to top"
                    title="Go to top"
                >
                    <FiArrowUp aria-hidden="true" />
                </button>
            )}
        </div>
    );
}

export default App;