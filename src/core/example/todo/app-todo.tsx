import { Provider } from "jotai";
import TodoList from "./TodoList";

function Todo() {
  return (
    <Provider>
      <div className="flex  flex-col justify-center items-center">
        <h2 className="font-bold text-5xl mb-5">Todo List</h2>
        <TodoList />
      </div>
    </Provider>
  );
}

export default Todo;
