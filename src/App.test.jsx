import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should show WelcomeScreen when list empty", () => {
  // Arrange
  Storage.prototype.getItem = jest.fn(() => {
    return null;
  });
  render(<App />);
  // Act
  const greetingMessage = screen.getByText(/Todo list/i);
  // Assert
  expect(greetingMessage).toBeInTheDocument();
});

test("Should show the normal screen if the list has items", () => {
  // Arrange
  const item = {
    id: 0,
    name: "Sofa",
    timestamp: 1632898930037,
    checked: false,
  };
  const data = [item];

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(data));

  render(<App />);

  // Act
  const textElement = screen.getByText(/my todo list/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});
