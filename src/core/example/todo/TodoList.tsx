import type { FormEvent } from "react";
import { useSetAtom, atom } from "jotai";
import Filter from "./Filter";
import Filtered from "./Filtered";
// type, type, "Array with Todo Type" - atom< PrimitiveAtom<Todo>[] >([])"
import { type Todo, type RemoveFn, todosAtom } from "./TodoItem";

const TodoList = () => {
  // Use `useSetAtom` to avoid re-render
  // const [, setTodos] = useAtom(todosAtom) - untuk mengaplikasikan aj
  const setTodos = useSetAtom(todosAtom);

  // Hapus
  const remove: RemoveFn = (todo) =>
    setTodos((prev) => prev.filter((item) => item !== todo));

  // Tambah
  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget.inputTitle.value;
    e.currentTarget.inputTitle.value = "";
    setTodos((prev) => [...prev, atom<Todo>({ title, completed: false })]);
  };
  return (
    <form onSubmit={add}>
      <Filter />
      <input name="inputTitle" placeholder="Type ..." />
      <Filtered remove={remove} />
    </form>
  );
};

export default TodoList;
