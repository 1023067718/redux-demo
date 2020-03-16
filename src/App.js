import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { PayIncrease, PayDecrease } = this.props;
    return (
      <div className="App">
        <div className="App">
          <h2>当月工资为：{this.props.tiger}</h2>
          <button onClick={PayIncrease}>升职加薪</button>
          <button onClick={PayDecrease}>迟到罚款</button>
        </div>
      </div>
    );
  }
}

const Increase = {
  type: "涨工资"
}

const Decrease = {
  type: "扣工资"
}

function mapStateToProps(state) {
  return {
    tiger: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch(Increase),
    PayDecrease: () => dispatch(Decrease)
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
