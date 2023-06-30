import { useEffect } from "react";
import "./App.css";
import util from "./utils/unknown";
import Filterbar from "./components/Filterbar";
import Beertable from "./components/Beertable";

export default function App() {
  // useEffect(() => {
  //   util()
  // })

  const beers = [ {name: "Beer1", price: 300, alcohol: 5, _id:"111"}, {name: "Beer2", price: 350, alcohol: 4.9, _id:"222"}, {name: "Beer3", price: 500, alcohol: 10, _id:"333"} ]

  return (
    <main>
      <Filterbar />
      <Beertable beers={beers} />
    </main>
  );
}
