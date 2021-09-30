import React, { useState } from "react";
import Button from "./shared/Button";
import welcomeImg from "../assets/img/welcome.png";
import Modal from "./Modal";

export default function Welcome({ setReload }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section-welcome">
      <img src={welcomeImg} alt="welcome" />

      <h2>Todo list</h2>
      <p>
        Welcome to Eika! Keep track of your shopping list with the App. Get
        started by adding a item to your list. You can then sort your shopping
        list by name or price and mark item as acquired.
      </p>
      <Button type="btn btn-main btn-300" onClick={() => setIsOpen(true)}>
        Add a Task
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setReload={setReload}
      />
    </section>
  );
}
