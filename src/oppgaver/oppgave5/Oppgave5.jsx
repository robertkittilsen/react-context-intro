import { TodosProvider } from "./context/Todos";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

export function Oppgave5() {
  // Her skal du lage en todo-liste ved hjelp av context
  // Den skal kunne legge til nye todo-items, oppdatere dem og fjerne dem.
  // Slapp av, mye av logikken er allerede tilstedet i komponentene.
  // Det du skal gjøre er å lage context og customhooks for å få det til å fungere!

  // 1. Gå inn i ./context/Todos.js og følg stegene der.

  // 15. Wrap "section" med TodosProvider
  // Voila! Nå kan du teste todo-listen (hvis du har gjort alle stegene :'D)
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
