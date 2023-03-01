import Thing from "./thing";
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

describe("<Thing />", () => {
  test("renders a button with the given name", () => {
    render(<Thing />);

    //expect(getByText("Hello")).toBeInTheDocument();
  });
});
