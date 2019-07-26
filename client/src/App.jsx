import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/index.jsx'

class App extends React.Component {
  render() {
    return (<div>
      <Index />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById("form-service"));