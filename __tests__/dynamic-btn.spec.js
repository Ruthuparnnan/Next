import DynamicLogoutButtonPage from "@/app/dynamic-btn-testing/page";
import { render, screen } from "@testing-library/react";

test("Does the dynamic button exists", async () => {
  render(<DynamicLogoutButtonPage />);
  const dynamicButton = await screen.findByRole("logout-btn");
  expect(dynamicButton).toBeInTheDocument();
});
