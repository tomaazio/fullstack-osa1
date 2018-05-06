import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  handleClick = (arvo) => () => {
    if (arvo === 'hyva') {
      this.setState((prevState) => {
        return {hyva: prevState.hyva + 1}
      })
    }
    if (arvo === 'neutraali') {
      this.setState((prevState) => {
        return {neutraali: prevState.neutraali + 1}
      })
    }
    if (arvo === 'huono') {
      this.setState((prevState) => {
        return {huono: prevState.huono + 1}
      })
    }
  }

  render() {
    return(
      <div>
        <h1>Unicafe</h1>
        <h2>Anna palautetta</h2>
        <button onClick={this.handleClick('hyva')}>hyvä</button>
        <button onClick={this.handleClick('neutraali')}>neutraali</button>
        <button onClick={this.handleClick('huono')}>huono</button>
        <h2>statistiikka</h2>
        <div>hyvä {this.state.hyva}</div>
        <div>neutraali {this.state.neutraali}</div>
        <div>huono {this.state.huono}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
)
