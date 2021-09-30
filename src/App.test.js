import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

/** MOCKUP TODOS **/
const todos = [
  {
    id: 1632898930037,
    title: "dance in circle",
    timestamp: 1632898930037,
    checked: false,
  },
  {
    id: 1632898963662,
    title: "run fast",
    timestamp: 1632898963662,
    checked: true,
  },
  {
    id: 1632900398536,
    title: "jump high",
    timestamp: 1632900398536,
    checked: false,
  },
];

/** LIST TESTS **/

test("The local storage has no data, first connexion to the app", () => {
  // Arrange
  const fakeLocalStorageData = null;
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  render(<App />);
  // Act
  const greetingMessage = screen.getByText(/Todo list/i);
  // Assert
  expect(greetingMessage).toBeInTheDocument();
});

test("The local storage has an empty list", () => {
  const fakeLocalStorageData = [];
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  render(<App />);

  const errorMessage = screen.getByText(/sorry no items found/i);

  expect(errorMessage).toBeInTheDocument();
});

test("to-do presence", () => {
  const fakeLocalStorageData = todos;

  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  render(<App />);

  const todo = screen.getByText(/jump high/i);
  expect(todo).toBeInTheDocument();
});

test("task-done absence", () => {
  const fakeLocalStorageData = todos;

  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  render(<App />);
  const taskDone = screen.queryByText(/run fast/i);
  expect(taskDone).toBeNull();
});

test("task-done presence after clicking the view tasks done button", () => {
  const fakeLocalStorageData = todos;
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  render(<App />);

  const buttonElement = screen.getByText(/view tasks done/i);
  fireEvent.click(buttonElement);

  const taskDone = screen.getByText(/run fast/i);
  expect(taskDone).toBeInTheDocument();
});

/** BUTTON TESTS **/

//user clicks on "Add a Task" should open modal
test("open modal", () => {
  const fakeLocalStorageData = todos;
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  const modal = document.createElement("div");
  modal.setAttribute("id", "modal");
  document.body.appendChild(modal);
  render(<App />);

  const buttonElement = screen.getByText(/add a task/i);
  fireEvent.click(buttonElement);

  const btnClose = screen.getByText(/close/i);
  expect(modal).toContainElement(btnClose);
});
// user clicks on "Check item"
// user clicks on "Sort by title"
// user clicks on "Sort by date added""

/** FORM TESTS **/

// user enter "" as title
// user enter " " as title (a space)
// user enter "ee" as title (2 letters only)

//
