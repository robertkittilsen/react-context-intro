import React, { useState } from "react";

export const Oppgave1 = () => {
  // Kjør opp oppgaven i App.js! Du skal se en header med en meny på venstre side og to knapper på høyre side.
  // Trykker du på English/Norsk skal menyen på venstre side bytte språk.

  // Oppgaven går ut på at du skal bruke context istedenfor å sende state med props.

  // 1. Opprett en context, kall den f.eks. LangContext.
  // 2. Opprett en Provider og wrap denne rundt Header-komponenten.
  // 3. Sett lang og handleLangChange som verdier i Provideren.
  // 4. Konsumer contexten i LangMenu-komponenten.
  // Obs! Du må også gjøre endringer med Header, PrimaryNav, ScondaryNav, LangNav!

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
      <button className="cta-button">CTA</button>
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
