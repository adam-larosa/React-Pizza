import React from "react"

const Pizza = (props) => {
  const { topping, vegetarian, size } = props.myInfo
//props.select
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'YES' : "no"}</td>
      <td><button onClick={() => props.select(props.myInfo)}type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
