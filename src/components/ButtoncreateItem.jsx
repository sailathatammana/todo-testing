import ModalForm from "./ModalForm";

export default function ButtonCreateItem({ setModal }) {
  function openModal() {
    setModal(<ModalForm setModal={setModal} />);
  }
  return (
    <button className="button-main" onClick={openModal}>
      Add Item
    </button>
  );
}
