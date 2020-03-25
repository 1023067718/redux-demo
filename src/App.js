import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Button, Timeline } from 'antd'

class App extends Component {
  render() {
    const { PayIncrease, PayDecrease } = this.props;
    return (
      <div className="App">
        <h2>当月工资为：{this.props.tiger}</h2>
        <Button type="primary" onClick={PayIncrease}>升职加薪</Button>
        <Button type="default" onClick={PayDecrease}>迟到罚款</Button>
        <h3>时间轴</h3>
        <Timeline mode="left">
          {
            this.props.infos.map((item, index) => {
              return <Timeline.Item key={index} label={item.date}>{item.message}</Timeline.Item>
            })
          }
        </Timeline>
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
    tiger: state.tiger,
    infos: state.infos
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
