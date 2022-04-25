import "./App.css";
import { Oppgave1, Oppgave2, Oppgave3, Oppgave4, Oppgave5 } from "./oppgaver";
import { Fasit1, Fasit2, Fasit3, Fasit4, Fasit5 } from "./fasit";
import { Eksempel1, Eksempel2a, Eksempel2b, Eksempel3 } from "./eksempler";
import { CenteredTask } from "./CenteredTask";

function Fasit() {
  return (
    <>
      <CenteredTask>
        {/* <Fasit1 /> */}
        {/* <Fasit2 /> */}
      </CenteredTask>
      {/* <Fasit3 /> */}
      {/* <Fasit4 /> */}
      {/* <Fasit5 /> */}
    </>
  );
}

function Eksempler() {
  return (
    <CenteredTask>
      {/* <Eksempel1 /> */}
      {/* <Eksempel2a /> */}
      {/* <Eksempel2b /> */}
      {/* <Eksempel3 /> */}
    </CenteredTask>
  );
}

function Oppgaver() {
  return (
    <>
      <CenteredTask>
        <Oppgave1 />
        {/* <Oppgave2 /> */}
      </CenteredTask>
      {/* <Oppgave3 /> */}
      {/* <Oppgave4 /> */}
      {/* <Oppgave5 /> */}
    </>
  );
}

function App() {
  return (
    <>
      <Eksempler />
      <Oppgaver />
      <Fasit />
    </>
  );
}

export default App;
