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

test("task-done presence after clicking the view tasks done button", () => {
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
