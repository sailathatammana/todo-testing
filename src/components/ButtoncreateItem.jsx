import ModalForm from "./ModalForm";

export default function ButtonCreateItem({ setModal }) {
  function openModal() {
    setModal(<ModalForm setModal={setModal} />);
  }
  return <button onClick={openModal}>Add Item</button>;
}
