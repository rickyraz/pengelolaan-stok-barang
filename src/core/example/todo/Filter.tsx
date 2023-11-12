import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { useAtom } from "jotai";

// "all"
import { filterAtom } from "./TodoItem";

export function Filter() {
  const [filter, set] = useAtom(filterAtom);
  return (
    <RadioGroup
      defaultValue={filter}
      onValueChange={(e) => set(e)}
      className="flex items-center space-x-4"
    >
      <div className="flex items-center space-x-1">
        <RadioGroupItem value="all" id="r1" />
        <Label htmlFor="r1">All</Label>
      </div>
      <div className="flex items-center space-x-1">
        <RadioGroupItem value="completed" id="r2" />
        <Label htmlFor="r2">completed</Label>
      </div>
      <div className="flex items-center space-x-1">
        <RadioGroupItem value="incompleted" id="r3" />
        <Label htmlFor="r3">incompleted</Label>
      </div>
    </RadioGroup>
  );
}

export default Filter;
