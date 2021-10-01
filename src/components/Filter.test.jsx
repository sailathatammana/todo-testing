import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import Filter from "./Filter";

const todolist = [
  {
    id: 1,
    title: "Buy Sofa",
    timestamp: 1632898930037,
    checked: false,
  },
  {
    id: 2,
    title: "Go to groceries shop",
    timestamp: 1632898963662,
    checked: true,
  },
];

test("Expected to show Hide tasks done text when active is true.", () => {
  // Arrange
  const active = true;
  render(<Filter active={active} />);

  // Act
  const textElement = screen.getByText(/hide tasks done/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});

test("Expected to show View tasks done text when active is false.", () => {
  // Arrange
  const active = false;
  render(<Filter active={active} />);

  // Act
  const textElement = screen.getByText(/view tasks done/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});

test("task-done presence after clicking the  tasks done button", () => {
  const fakeLocalStorageData = todolist;
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  render(
    <App>
      <Filter />
    </App>
  );

  const buttonElement = screen.getByText(/view tasks done/i);
  fireEvent.click(buttonElement);

  const taskDone = screen.getByText(/go to groceries shop/i);
  expect(taskDone).toBeInTheDocument();
});
