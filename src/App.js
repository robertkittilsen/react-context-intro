import "./App.css";
import { Oppgave1, Oppgave2, Oppgave3, Oppgave4, Oppgave5 } from "./oppgaver";
import { Fasit1, Fasit2, Fasit3, Fasit4, Fasit5 } from "./fasit";
import { Eksempel1, Eksempel2a, Eksempel2b, Eksempel3 } from "./eksempler";
import { TaskWrapper } from "./TaskWrapper";

function Oppgaver() {
  return (
    <>
      <TaskWrapper>
        {/* <Oppgave1 /> */}
        {/* <Oppgave2 /> */}
      </TaskWrapper>
      {/* <Oppgave3 /> */}
      {/* <Oppgave4 /> */}
      {/* <Oppgave5 /> */}
    </>
  );
}

function Fasit() {
  return (
    <>
      <TaskWrapper>
        <Fasit1 />
        {/* <Fasit2 /> */}
      </TaskWrapper>
      {/* <Fasit3 /> */}
      {/* <Fasit4 /> */}
      {/* <Fasit5 /> */}
    </>
  );
}

function Eksempler() {
  return (
    <TaskWrapper>
      {/* <Eksempel1 /> */}
      {/* <Eksempel2a /> */}
      {/* <Eksempel2b /> */}
      {/* <Eksempel3 /> */}
    </TaskWrapper>
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
