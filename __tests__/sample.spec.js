import Greet from "@/app/greet/greet";
import { render, screen } from "@testing-library/react";

test("Does the discipline exists", () => {
  render(<h2>discipline</h2>);
  const chathi = screen.getByText("discipline");
  expect(chathi).toBeInTheDocument();
});

// test("Does div role exists", () => {
//   render(<Greet />);
//   const divRole = screen.getByRole("divsion", { name: "div copy" });
// });
