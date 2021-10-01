import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import Checkbox from "./Checkbox";

test("Should fire an event changes", async () => {
  // Arrange
  const method = jest.fn();
  render(<Checkbox onChange={method} />);

  // Act
  const inputCheckboxElement = screen.getByTestId("checkbox");

  fireEvent.click(inputCheckboxElement);

  // Assert
  expect(method).toHaveBeenCalledTimes(1);
});

test("Should be checked when is true", async () => {
  // Arrange
  const checked = true;
  const fakeMethod = jest.fn();
  render(<Checkbox checked={checked} onChange={fakeMethod} />);

  // Act
  const inputCheckboxElement = screen.getByTestId("checkbox");

  // Assert
  expect(inputCheckboxElement.checked).toBe(true);
});

test("Should be unckeched when is false.", async () => {
  // Arrange
  const checked = false;
  const fakeMethod = jest.fn();
  render(<Checkbox checked={checked} onChange={fakeMethod} />);

  // Act
  const inputCheckboxElement = screen.getByTestId("checkbox");

  // Assert
  expect(inputCheckboxElement.checked).toBe(false);
});
