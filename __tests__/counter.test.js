import React from "react";
import { render, screen } from "@testing-library/react";

describe("Sample Test", () => {
  it("renders a message", () => {
    render(<h1>Hello, Next.js!</h1>);
    expect(screen.getByText("Hello, Next.js!")).toBeInTheDocument();
  });
});
