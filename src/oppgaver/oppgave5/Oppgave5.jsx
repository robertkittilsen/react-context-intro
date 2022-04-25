import { TodosProvider } from "./context/Todos";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

export function Oppgave5() {
  // Her skal du lage en todo-liste ved hjelp av context
  // Den skal kunne legge til nye todo-items, oppdatere dem og fjerne dem.
  // Slapp av, mye av logikken er allerede tilstede i komponentene.
  // Det du skal gjøre er å lage context og customhooks for å få det til å fungere!

  // Oppgaven består av 14 steg, du begynner med å følge stegene i ./context/Todos.js.

  // 14. Wrap "section" med TodosProvider
  // Voila! Nå kan du teste todo-listen og sammenligne med fasit.
  return (
    <>
      <section className="section-todo">
        <h1>Hva har jeg lært i dag?</h1>
        <AddTodo />
        <TodoList />
      </section>
    </>
  );
}
