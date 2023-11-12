import { useAtom } from "jotai";
import { a, useTransition } from "@react-spring/web";
import TodoItem, { type RemoveFn, filteredAtom } from "./TodoItem";

type FilteredType = {
  remove: RemoveFn;
};

const Filtered = (props: FilteredType) => {
  const [todos] = useAtom(filteredAtom);
  const transitions = useTransition(todos, {
    keys: (todo) => todo.toString(),
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 40 },
    leave: { opacity: 0, height: 0 },
  });
  return transitions((style, atom) => (
    <a.div className="item" style={style}>
      <TodoItem atom={atom} {...props} />
    </a.div>
  ));
};

export default Filtered;
