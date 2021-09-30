import React, { useState } from "react";
//Local imports
import Button from "./shared/Button";
import Modal from "./Modal";

export default function SectionButtons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section-buttons">
      <Button type="btn-main btn-140" onClick={() => setIsOpen(true)}>
        Add a Task
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
