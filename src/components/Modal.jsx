import ReactDom from "react-dom";

export default function Modal({ state }) {
  const [modal, setModal] = state;

  // safeguard
  if (modal === null) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-modal">
        <div className="modal">
          <div className="close-button">
            <button onClick={() => setModal(null)}>X</button>
          </div>
          {modal}
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
