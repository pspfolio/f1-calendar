/*
  propseina saadaan {name: columnName, path: mistäObjektinPropertystahaetaan} array joka käydään läpi mapilla ja palautetaan
  <th>tableHeader</th> itemejä. Se renderöidään <Table><thead><tr>{omaTh}</tr></thead></table>

  saadaan oikea data, käydään Mapilla data läpi, sisällä haetaan for loopilla jokainen polku column datasta ja haetaan column.pathilla oikea data paikalleen.

*/

import React from 'react'
import deep from 'deep-get-set'

const ResultTable = React.createClass({
  render() {
    const { headers, results } = this.props

    const header = headers.map(header => {
      return <th key={header.name}>{header.name}</th>

    })

    const body = results.map(result => {
      const td = []

      for(var i = 0; i < headers.length; i++) {
        var headersPath = headers[i].path
        var data = deep(result, headersPath)
        td.push(<td key={i}>{data}</td>)
      }

      return <tr key={result.number}>{td}</tr>
    })

    return(
      <table>
        <thead>
          <tr>
            {header}
          </tr>
        </thead>
        <tbody>
          {body}
        </tbody>
      </table>
    )
  }
});

export default ResultTable;
