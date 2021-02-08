import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    selected: {}
  }

  sendToBack = () => {
    //this.state.selected

    //const = 'http://localhost:320-';
  };

  editTheSelected = e => {
    console.log(e.target.value)
    if (e.target.value === "Vegetarian") {
      this.setState({ selected: {...this.state.selected, 
      vegetarian: true } })
    } else {
      this.setState({ selected: {...this.state.selected, 
      vegetarian: false } })
    };
  }
  changeTopping = e => {
    this.setState({ selected: {...this.state.selected, topping: e.target.value}})
  };
  changeSize =  e => {
    this.setState({ selected: {...this.state.selected, size: e.target.value}})
  };

  componentDidMount() {
    const url = "http://localhost:3000/pizzas";
    fetch(url).then(r => r.json()).then(pizzas => {
      this.setState({ pizzas });
    });
  };
  selectThePizza = pizza => this.setState({ selected: pizza});
  render() {
    console.log(this.state)
    return (
      <Fragment>
        
        <Header/>
        <PizzaForm sendToBack={this.sendToBack}changeTopping={this.changeTopping} changeSize={this.changeSize} radioBtn={this.editTheSelected} theOnePizza={this.state.selected}/>
        <PizzaList select={this.selectThePizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
