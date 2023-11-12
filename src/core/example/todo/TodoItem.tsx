import type { Getter, PrimitiveAtom } from "jotai";
import { atom, useAtom } from "jotai";
import { XCircle } from "lucide-react";

type Todo = {
  title: string;
  completed: boolean;
};

type RemoveFn = (item: PrimitiveAtom<Todo>) => void;
type TodoItemProps = {
  atom: PrimitiveAtom<Todo>;
  remove: RemoveFn;
};

// state/atom
const filterAtom = atom("all");
const todosAtom = atom<PrimitiveAtom<Todo>[]>([]);
// read only atom
const filteredAtom = atom<PrimitiveAtom<Todo>[]>((get: Getter) => {
  const filterDefault = get(filterAtom);
  const todos = get(todosAtom);

  if (filterDefault === "all") return todos;
  else if (filterDefault === "completed")
    return todos.filter((atom) => get(atom).completed);
  else return todos.filter((atom) => !get(atom).completed);
});

// Jotai atoms are small isolated pieces of state. Ideally, one atom contains very small data. as an default value
// const [count, setCounter] = useAtom(counter); === const [state, setState] = useState(0)

const TodoItem = ({ atom, remove }: TodoItemProps) => {
  const [item, setItem] = useAtom(atom);
  const toggleCompleted = () =>
    setItem((props) => ({ ...props, completed: !props.completed }));
  return (
    <div className="flex justify-between">
      <div>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={toggleCompleted}
        />
        <span style={{ textDecoration: item.completed ? "line-through" : "" }}>
          {item.title}
        </span>
      </div>
      <XCircle onClick={() => remove(atom)} strokeWidth={1.4} />
    </div>
  );
};

export default TodoItem;

// export atom as a state global
// eslint-disable-next-line react-refresh/only-export-components
export { filteredAtom, filterAtom, todosAtom };

export type { Todo, RemoveFn };
