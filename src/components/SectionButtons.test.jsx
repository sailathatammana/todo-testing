import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import SectionButtons from "./SectionButtons";

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

  const buttonElement = screen.getByText(/add item/i);
  fireEvent.click(buttonElement);

  const btnClose = screen.getByText(/close/i);
  expect(btnClose).toBeInTheDocument();
});
