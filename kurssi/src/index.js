import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return(
    <div>
      <h1>{props.nimi}</h1>
    </div>
  )
}

const Osa = (props) => {
  return(
      <p>{props.osa} {props.tehtavia}</p>
  )
}

const Sisalto = ({osat}) => {
  return(
    <div>
    <Osa osa={osat[0].nimi} tehtavia={osat[0].tehtavia}/>
    <Osa osa={osat[1].nimi} tehtavia={osat[1].tehtavia}/>
    <Osa osa={osat[2].nimi} tehtavia={osat[2].tehtavia}/>

    </div>
  )
}

const Yhteensa = ({osat}) => {
  return(
    <div>
      <p>yhteensä {osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} tehtävää</p>
    </div>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko nimi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
