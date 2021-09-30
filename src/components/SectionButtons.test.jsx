import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import SectionButtons from "./SectionButtons";

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

/** BUTTON TESTS **/

//user clicks on "Add a Task" should open modal
test("open modal", () => {
  const fakeLocalStorageData = todolist;
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  const modal = document.createElement("div");
  modal.setAttribute("id", "modal");
  document.body.appendChild(modal);
  render(
    <App>
      <SectionButtons />
    </App>
  );

  const buttonElement = screen.getByText(/add a task/i);
  fireEvent.click(buttonElement);

  const btnClose = screen.getByText(/close/i);
  expect(btnClose).toBeInTheDocument();
});
// user clicks on "Check item"
// user clicks on "Sort by title"
// user clicks on "Sort by date added""

/** FORM TESTS **/

// user enter "" as title
// user enter " " as title (a space)
// user enter "ee" as title (2 letters only)

//
