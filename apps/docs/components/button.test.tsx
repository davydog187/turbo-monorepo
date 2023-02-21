import { Button } from "./button";
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

describe("<Button />", () => {
  test("renders a button with the given name", () => {
    const { getByText } = render(<Button className="hi">Hello</Button>);

    expect(getByText("Hello")).toBeInTheDocument();
  });
});
