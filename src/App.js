import "./App.css";
import { Oppgave1, Oppgave2, Oppgave3, Oppgave4, Oppgave5 } from "./oppgaver";
import { Fasit1, Fasit2, Fasit3, Fasit4, Fasit5 } from "./fasit";

function Oppgaver() {
  return (
    <>
      <Oppgave1 />
      {/* <Oppgave2 /> */}
      {/* <Oppgave3 /> */}
      {/* <Oppgave4 /> */}
      {/* <Oppgave5 /> */}
    </>
  );
}

function Fasit() {
  return (
    <>
      {/* <Fasit1 /> */}
      {/* <Fasit2 /> */}
      {/* <Fasit3 /> */}
      {/* <Fasit4 /> */}
      {/* <Fasit5 /> */}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Oppgaver />
        <Fasit />
      </header>
    </div>
  );
}

export default App;
