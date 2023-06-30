export default function Filterbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="navbar-brand">Filter By:</h1>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link active">Alcohol %</button>
            </li>
            <li className="nav-item">
              <button className="nav-link active">Price</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Search:
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Beername"
          aria-label="Beername"
          aria-describedby="basic-addon1"
        />
      </div>
    </nav>
  );
}
