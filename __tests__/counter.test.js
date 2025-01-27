import React from "react";
import { render, screen } from "@testing-library/react";
import Greet from "@/app/greet/greet";

// this is a test group you can also write the individual test files outside the describe function.
// also i can use the .only and .skip wtih describe as well.we can also nest the describe methods inside another.
describe("Sample Test", () => {
  // it("renders a message", () => {
  //   render(<h1>Hello, Next.js!</h1>);
  //   expect(screen.getByText("Hello, Next.js!")).toBeInTheDocument();
  // });
  test("Does something exists", () => {
    render(<h2>something</h2>);
    const chathi = screen.getByText("something");
    expect(chathi).toBeInTheDocument();
  });

  test("Does greet renders name", () => {
    render(<Greet name="minnu" />);
    const name = screen.getByText("Hello minnu");
    expect(name).toBeInTheDocument();
  });
});

test("does division exists", () => {
  render(<Greet />);
  const div = screen.getByRole("division", { name: "orginal div" });
  expect(div).toBeInTheDocument();
});
