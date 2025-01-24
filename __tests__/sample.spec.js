import { render, screen } from "@testing-library/react";

test("Does the chathik chathi exists", () => {
  render(<h2>chathik chathi</h2>);
  const chathi = screen.getByText("chathik chathi");
  expect(chathi).toBeInTheDocument();
});
