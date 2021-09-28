import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import logo from "./assets/logo.png";
import Modal from "./components/Modal";
import NormalScreen from "./screens/NormalScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { listState } from "./state/listData";
import "./styles/style.css";

export default function App() {
  // Local State
  const [list, setList] = useRecoilState(listState);
  const [modal, setModal] = useState(null);

  // Methods
  useEffect(() => {
    const rawData = localStorage.getItem("items");
    const data = JSON.parse(rawData) ?? [];
    setList(data);
  }, [setList]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
      <header>
        <img className="logo" src={logo} alt=" company logo" />
      </header>
      {list.length === 0 ? (
        <WelcomeScreen setModal={setModal} />
      ) : (
        <NormalScreen setModal={setModal} />
      )}
      {/* Modal popup */}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
