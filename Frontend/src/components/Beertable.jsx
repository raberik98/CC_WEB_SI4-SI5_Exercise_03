export default function Beertable({ beers }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Beername</th>
          <th scope="col">Alcohol %</th>
          <th scope="col">Price $$$</th>
        </tr>
      </thead>
      <tbody>
        {beers.length > 0 ? (
          beers.map((item, index) => (
            <tr key={item._id}>
              <th scope="row">{index}</th>
              <td>{item.name}</td>
              <td>{item.alcohol}</td>
              <td>{item.price}</td>
            </tr>
          ))
        ) : (
          <h2>Beers not found!</h2>
        )}
      </tbody>
    </table>
  );
}
