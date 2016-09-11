import React from 'react';

const Grandprix = React.createClass({
  render () {
    const { grandprix } = this.props
    console.log(grandprix);
    let gp;
    if (grandprix) {
      gp = (
        <div>
          <h2>{grandprix.name}</h2>
          <h3>{grandprix.circuit.circuitName}</h3>
          <div>
            <h3>Race result</h3>
            <table>
              <thead>
                <tr>
                  <th>Pos.</th>
                  <th>Name</th>
                  <th>Constructor</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {grandprix.results.map((result, num) => {
                  return <tr key={num}>
                    <td>{result.position}</td>
                    <td>({result.Driver.code}) {result.Driver.familyName}, {result.Driver.givenName}</td>
                    <td>{result.Constructor.name}</td>
                    <td>{result.points}</td>
                    </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      )

    } else {
      gp = <h2>Not found</h2>
    }

    return (
      <div className="grand-prix">
        {gp}
      </div>
    )
  }
})

export default Grandprix;
