import { useEffect } from "react";
import "./App.css";
import util from "./utils/unknown" 



function App() {
  useEffect(() => {
    util()
  })
  return (
    <div>
      <header>
        <h1>Get your cheap beer here!</h1>
      </header>
      <section>
        <h3>Fill this form and place an order!</h3>
        <form>

        </form>
      </section>
      <section>
        <div>
          <h3>
            <h3>Currently these beers are available!</h3>
          </h3>
        </div>
      </section>
    </div>
  );
}

export default App;
