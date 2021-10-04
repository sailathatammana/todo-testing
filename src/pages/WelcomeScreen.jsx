import React, { useState } from "react";

import Button from "../components/shared/Button";
import Modal from "../components/Modal";
import welcomeImg from "../assets/img/welcome.png";

export default function Welcome({ hook }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reload, setReload] = hook;

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
        Add Item
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setReload={() => setReload(!reload)}
      />
    </section>
  );
}
