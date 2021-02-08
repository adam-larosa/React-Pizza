import React from "react"

class PizzaForm extends React.Component {
  // state = {
  //   topping: "",
  //   size: '',
  //   vegetarian: true
  // }

  render() {
  console.log(this.props.theOnePizza)
  return(
  
      <div className="form-row">
        <div className="col-5">
            <input onChange={this.props.changeTopping} type="text" className="form-control" placeholder="Pizza Topping" value={
                this.props.theOnePizza.topping
                //this should work
              }/>
        </div>
        <div className="col">
          <select onChange={this.props.changeSize} value={this.props.theOnePizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={this.props.radioBtn} className="form-check-input" type="radio" value="Vegetarian" checked={this.props.theOnePizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={this.props.radioBtn} className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.props.theOnePizza.vegetarian} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.props.sendToBack}>Submit</button>
        </div>
      </div>

  )
  }
}

export default PizzaForm
