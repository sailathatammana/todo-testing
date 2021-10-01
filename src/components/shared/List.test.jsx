import { render, screen } from "@testing-library/react";
import App from "../../App";
import List from "./List";

/** MOCKUP TODOS **/
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

test("The local storage has an empty list", () => {
  const fakeLocalStorageData = [];
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  render(
    <App>
      <List />
    </App>
  );

  const errorMessage = screen.getByText(/sorry no items found/i);

  expect(errorMessage).toBeInTheDocument();
});

test("to-do presence", () => {
  const fakeLocalStorageData = todolist;

  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  render(
    <App>
      <List />
    </App>
  );

  const todo = screen.getByText(/buy sofa/i);
  expect(todo).toBeInTheDocument();
});

test("task-done absence", () => {
  const fakeLocalStorageData = todolist;

  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  render(
    <App>
      <List />
    </App>
  );
  const taskDone = screen.queryByText(/run fast/i);
  expect(taskDone).toBeNull();
});
