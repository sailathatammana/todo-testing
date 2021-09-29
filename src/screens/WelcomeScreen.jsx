import image from "../assets/welcome.png";
import ButtonCreateItem from "../components/ButtoncreateItem";

export default function WelcomeScreen({ setModal }) {
  return (
    <div id="welcome-page">
      <img src={image} alt="Woman getting out of a store with shopping bags" />
      <h1>Shopping list</h1>
      <p>
        Welcome to Eika! Keep track of your shopping list with the App. Get
        started by adding a item to your list. You can then sort your shopping
        list by name or price and mark item as acquired.
      </p>
      <ButtonCreateItem setModal={setModal} />
    </div>
  );
}
