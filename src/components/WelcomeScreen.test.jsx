import { render, screen } from "@testing-library/react";
import WelcomeScreen from "./WelcomeScreen";

test("The local storage has no data, first connexion to the app", () => {
  // Arrange
  const fakeLocalStorageData = null;
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData);
  });
  render(<WelcomeScreen />);
  // Act
  const greetingMessage = screen.getByText(/Todo list/i);
  // Assert
  expect(greetingMessage).toBeInTheDocument();
});
