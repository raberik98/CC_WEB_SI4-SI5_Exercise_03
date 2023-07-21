import { useState } from "react";

export default function Filterbar({ mode, setMode, setBeers, beers, setUserInput }) {
    const [sortingOrder, setSortingOrder] = useState(true);

    const sortHandler = (event) => {
        setSortingOrder(!sortingOrder);

        let newBeers;

        sortingOrder
            ? (newBeers = [...beers].sort(
                  (a, b) => a[event.target.name] - b[event.target.name]
              ))
            : (newBeers = [...beers].sort(
                  (a, b) => b[event.target.name] - a[event.target.name]
              ));

        setBeers(newBeers);
    };

    const searchHandler = (event) => {
      setUserInput(event.target.value);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h1 className="navbar-brand">Filter By:</h1>
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button
                                name="alcohol"
                                onClick={sortHandler}
                                className="nav-link active"
                            >
                                Alcohol %
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                name="price"
                                onClick={sortHandler}
                                className="nav-link active"
                            >
                                Price
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link active"
                                onClick={() => {
                                    setMode(!mode);
                                }}
                            >
                                Swap modes
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="input-group mb-3">
                <span
                    className="input-group-text"
                    id="basic-addon1"
                >
                    Search:
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Beername"
                    aria-label="Beername"
                    aria-describedby="basic-addon1"
                    onChange={searchHandler}
                />
            </div>
        </nav>
    );
}
