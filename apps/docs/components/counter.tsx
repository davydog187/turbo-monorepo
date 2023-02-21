import { useState } from "react";
import { sum } from "lib/sum";

type Props = {
  initial?: number;
};

export function Counter(props: Props) {
  const [value, setValue] = useState(props.initial || 0);
  return (
    <div>
      <button onClick={() => setValue(sum(value, 1))}>Increment</button>
      <p>Count is {sum(value, 0)}</p>
    </div>
  );
}
