import { TodosProvider } from "../contexts/Todos";
import { AddTodo } from "../components/todo/AddTodo";
import { TodoList } from "../components/todo/TodoList";

export function Fasit5() {
  return (
    <TodosProvider>
      <section className="section-todo">
        <h1>Hva har jeg lært i dag?</h1>
        <AddTodo />
        <TodoList />
      </section>
    </TodosProvider>
  );
}
