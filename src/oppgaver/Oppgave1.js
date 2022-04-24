import React, { useState } from "react";
import "./styles.css";

// Oppgave 1: Bruk context istedenfor å sende state med props.

export const Oppgave1 = () => {
  const [lang, setLang] = useState("norwegian");

  const handleLangChange = () => {
    if (lang === "norwegian") {
      setLang("english");
    }

    if (lang === "english") {
      setLang("norwegian");
    }
  };

  return <Header lang={lang} handleLangChange={handleLangChange} />;
};

const Header = ({ lang, handleLangChange }) => {
  return (
    <header className="header">
      <PrimaryNav lang={lang} />
      <SecondaryNav lang={lang} handleLangChange={handleLangChange} />
    </header>
  );
};

const PrimaryNav = ({ lang }) => {
  return (
    <nav>
      <ul>
        <li>{lang === "norwegian" ? "Hjem" : "Home"}</li>
        <li>{lang === "norwegian" ? "Om oss" : "About us"}</li>
        <li>{lang === "norwegian" ? "Hva vi tilbyr" : "What we offer"}</li>
        <li>{lang === "norwegian" ? "Kontakt oss" : "Contact us"}</li>
      </ul>
    </nav>
  );
};

const SecondaryNav = ({ lang, handleLangChange }) => {
  return (
    <div className="secondary-nav">
      <LangNav lang={lang} handleLangChange={handleLangChange} />
      <CTANav />
    </div>
  );
};

const CTANav = () => {
  return (
    <div className="cta-nav">
      <button>CTA</button>
    </div>
  );
};

const LangNav = ({ lang, handleLangChange }) => {
  return (
    <div className="lang-nav">
      <LangMenu lang={lang} handleLangChange={handleLangChange} />
    </div>
  );
};

const LangMenu = ({ lang, handleLangChange }) => {
  return (
    <button className="lang-button" onClick={handleLangChange}>
      {lang === "norwegian" ? "English" : "Norsk"}
    </button>
  );
};
