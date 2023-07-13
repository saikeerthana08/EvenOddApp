// Write your code here
import {Component} from 'react'
import './index.css'

export default class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const resultText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="main-heading">Count {count}</h1>
          <p className="text">Count is {resultText}</p>
          <button type="button" className="button" onClick={this.increment}>
            increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
