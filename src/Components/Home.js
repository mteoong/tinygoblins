import React, {Component} from 'react'; 
import './Home.css';
import {checkStatus, returnCount} from './Mint';
import goblin from './goblin.gif'

class Home extends Component {
  state = {
    count: 1,
  }

  increment = () => {
    this.setState((state) => {
      if(state.count < 10) {
        checkStatus(document.getElementsByClassName('mint')[0], Number(document.getElementsByClassName("num")[0].value) + 1);
        return {count: state.count + 1}
      } else {
        return {count: state.count}
      }
    });
  }

  decrement = () => {
    this.setState((state) => {
      if(state.count > 1) {
        checkStatus(document.getElementsByClassName('mint')[0], Number(document.getElementsByClassName("num")[0].value ) - 1);
        return {count: state.count - 1}
      } else {
        return {count: state.count}
      }
    });
  }

  handleChange = (event) => {
    this.setState({state: event.target.value});
  }

  componentDidMount() {
    const mintButton = document.getElementsByClassName('mint')[0];
    const amount = Number(document.getElementsByClassName("num")[0].value);
    const minted = document.getElementsByClassName('sold')[0];

    returnCount(minted);
    checkStatus(mintButton, amount);
  }

  render() {
    return (
      <div>
        <div className="body">
        <div className="minter">
          <div className="mint-right">
            <img src={goblin} className="nootimg" />
            <h1 className="mint-title">
              TinyGoblins.wtf
            </h1>
            </div>
          <div className="mint-left">
            <h1 className="mint-description">
              1 Free. Max 10 (0.0069Ξ).
            </h1>
            <div className="sold">
                /2999
            </div>
            <div className="mint-function">
              <div className="mint-amt">
                <button className="minmax" onClick={this.decrement}> - </button>
                <input className="num" type="text" value={this.state.count} onChange={this.handleChange} readOnly ></input>
                <button className="minmax" onClick={this.increment}> + </button>
              </div>
              <button className="mint">MINT</button>
            </div>
          </div>  
        </div>
        </div>
      </div>
    );
  }
}

export default Home;