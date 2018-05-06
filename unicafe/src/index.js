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
    <h2>Statistiikka</h2>
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
    if (arvo === 'hyva') {
      this.setState((prevState) => {
        return {
          hyva: prevState.hyva + 1,
          palautteita: prevState.palautteita + 1
        }
      })
    }
    if (arvo === 'neutraali') {
      this.setState((prevState) => {
        return {
          neutraali: prevState.neutraali + 1,
          palautteita: prevState.palautteita + 1
        }
      })
    }
    if (arvo === 'huono') {
      this.setState((prevState) => {
        return {
          huono: prevState.huono + 1,
          palautteita: prevState.palautteita + 1
        }
      })
    }
  }

  positiiviset = () => {
    if (this.state.palautteita === 0) {
      return 0
    }
    return (this.state.hyva/this.state.palautteita *100).toFixed(1) + " %"
  }

  keskiarvo = () => {
    if (this.state.palautteita === 0) {
      return 0
    }
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
        <Statistics
          hyva={this.state.hyva}
          neutraali={this.state.neutraali}
          huono={this.state.huono}
          keskiarvo={this.keskiarvo()}
          positiiviset={this.positiiviset()}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
)
