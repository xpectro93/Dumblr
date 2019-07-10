import React, { Component } from 'react'
import './css/NavBar.css'
import { NavLink } from 'react-router-dom'
import output from './output.gif';
const style = {
  width:"40px"
}
export default class NavBar extends Component {
  state = {
    navInput:''
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.id]:e.target.value

    })
  }
// export const NavBar = () => {
  // state = {
  //   searchInput:""
  // }
  // onChange = e => {
  //   [e.target.name]:e.target.value
  // }
  // onSubmit = e=> {
  //   e.preventDefault();
  //   this.props.search(this.state.searchInput)
  // }

//component
//  let stuff = this.props.searchResults.map(result => {
//   return (
//     div
//     h1 result.title /h1
//     /div
//   )
// })


//container
  // mapDispatchToProps = dispatch => {
  //   search: (something)=>dispatch(search(something))
  // }
  // map statetoPorps =>
  // searchResults: state.search.searchResults


//action
// export const search (tag) =>dispatch => {
//   axios
//   .get(/tag/${id})
//   then(res => {
//     dispatch({
//       type:SEARCH_RES,
//       payload: res.data.body
//     })
//   })
// }
//
//reducer
//initState = {
// searchResults:[]
// }

// case SEARCH_RES
//     searchResults:action.payload

render(){
  console.log('State at nav', this.state)
  return(
    <nav>
      <div className="navbar">
      <div id="navbar1">
         <NavLink to='/dashboard' ><img src={output} alt="leLogo"style={style}/> </NavLink>
         <form>
        <input  id="navInput" onChange={this.handleChange} type="text"/>
        </form>
        </div>
        <div id="navbar2">
        <li id='nav-button'><NavLink exact to='/dashboard'><img  src="https://img.icons8.com/nolan/64/000000/home.png" alt="logo" style={style} /></NavLink></li>
        <li id='nav-button'><NavLink exact to='/explore'><img  src="https://img.icons8.com/nolan/64/000000/dashboard.png"alt="logo" style={style} /></NavLink></li>
        <li id='nav-button'><NavLink exact to='/blog'><img  src="https://img.icons8.com/nolan/64/000000/user-male-circle.png" alt="logo" style={style} /></NavLink></li>
        <li id='nav-button'><NavLink exact to='/create-post'><img  id='create-post' src="https://img.icons8.com/nolan/64/000000/create.png" alt="logo" style={style} /></NavLink></li>
        </div>
      </div>
    </nav>
  )
}

}
