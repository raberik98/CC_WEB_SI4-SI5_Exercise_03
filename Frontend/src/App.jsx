import { useEffect } from "react";
import "./App.css";
import util from "./utils/unknown";
import Filterbar from "./components/Filterbar";
import Beertable from "./components/Beertable";

export default function App() {
  // useEffect(() => {
  //   util()
  // })
  return (
    <main>
      <Filterbar />
      <Beertable />
    </main>
  );
}
