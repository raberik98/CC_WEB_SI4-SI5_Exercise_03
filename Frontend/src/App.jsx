import { useEffect, useState } from "react";
import "./App.css";
import util from "./utils/unknown";
import Filterbar from "./components/Filterbar";
import Beertable from "./components/Beertable";
import BeerCreator from "./components/BeerCreator";

export default function App() {
    const [beers, setBeers] = useState([]);
    const [userInput, setUserInput] = useState("");

    // useEffect(() => {
    //     util();
    // });
    const [mode, setMode] = useState(true); // true means we don't want to add a new beer, false mean that we do
    //const beers = [ {name: "Beer1", price: 300, alcohol: 5, _id:"111"}, {name: "Beer2", price: 350, alcohol: 4.9, _id:"222"}, {name: "Beer3", price: 500, alcohol: 10, _id:"333"} ]
    useEffect(() => {
        const fetchBeers = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3001/api/v1/beers"
                );
                const data = await response.json();
                setBeers(data);
            } catch (error) {
                console.error("error fetching beers:", error);
            }
        };
        fetchBeers();
    }, []);

    return (
        <main>
            <Filterbar
                mode={mode}
                setMode={setMode}
                setUserInput={setUserInput}
                beers={beers}
                setBeers={setBeers}
            />
            {mode ? (
                <Beertable
                    beers={beers.filter((item) =>
                        userInput !== "" ? item.name.includes(userInput) : true
                    )}
                />
            ) : (
                <BeerCreator />
            )}
        </main>
    );
}
