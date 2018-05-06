import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ handleClick, text}) =>
  <button onClick={handleClick}>
    {text}
  </button>

const Statistic = (props) =>
  <div>{props.text} {props.value}</div>


const Statistics = (props) =>
  <div>
    <Statistic text="hyvä" value={props.hyva}/>
    <Statistic text="neutraali" value={props.neutraali}/>
    <Statistic text="huono" value={props.huono}/>
    <Statistic text="keskiarvo" value={props.keskiarvo}/>
    <Statistic text="positiivisia" value={props.positiiviset}/>
  </div>


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      palautteita: 0,
    }
  }

  handleClick = (arvo) => () => {
      this.setState((prevState) => {
        return {
          [arvo]: prevState[arvo] + 1,
          palautteita: prevState.palautteita + 1
        }
      })
    }

  positiiviset = () => (this.state.hyva/this.state.palautteita *100).toFixed(1) + " %"


  keskiarvo = () => {
    const hyvat = this.state.hyva
    const huonot = this.state.huono * -1
    const keskiarvo = ((hyvat + huonot)/this.state.palautteita).toFixed(2)
    return keskiarvo
  }

  render() {
    return(
      <div>
        <h1>Unicafe</h1>
        <h2>Anna palautetta</h2>
        <Button handleClick={this.handleClick('hyva')} text="hyvä" />
        <Button handleClick={this.handleClick('neutraali')} text="neutraali" />
        <Button handleClick={this.handleClick('huono')} text="huono" />
        <h2>Statistiikka</h2>
        {this.state.palautteita === 0 ? (
            <em>ei yhtään palautetta annettu</em>
          ) : (
            <Statistics
              hyva={this.state.hyva}
              neutraali={this.state.neutraali}
              huono={this.state.huono}
              keskiarvo={this.keskiarvo()}
              positiiviset={this.positiiviset()}
            />
          )}
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
)
