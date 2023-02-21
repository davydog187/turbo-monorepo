import { Counter } from "./counter";
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

describe("<Counter />", () => {
  test("renders a counter with the intial value", () => {
    const { getByText } = render(<Counter initial={5} />);

    expect(getByText("Count is 5")).toBeInTheDocument();
  });
});
